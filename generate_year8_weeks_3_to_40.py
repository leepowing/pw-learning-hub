from __future__ import annotations

import argparse
import re
import shutil
import subprocess
from pathlib import Path


def extract_words(pdf_path: Path) -> list[str]:
    pdftotext = shutil.which("pdftotext")
    if not pdftotext:
        raise SystemExit(
            "找不到 pdftotext。Windows 可先安装 Poppler，再把其 bin 目录加入 PATH。"
        )

    result = subprocess.run(
        [pdftotext, "-layout", str(pdf_path), "-"],
        check=True,
        capture_output=True,
        text=True,
        encoding="utf-8",
        errors="replace",
    )

    pages = result.stdout.split("\f")[:4]
    page_counts: list[int] = []
    words: list[str] = []

    for page in pages:
        rows = [line.split() for line in page.splitlines() if len(line.split()) == 7]
        page_words = [word.lower() for row in rows for word in row]
        page_counts.append(len(page_words))
        words.extend(page_words)

    expected_counts = [266, 322, 322, 315]
    if page_counts != expected_counts:
        raise SystemExit(
            f"PDF 格式与预期不同：每页读取到 {page_counts}，预期 {expected_counts}。"
        )

    if len(words) != 1225 or len(set(words)) != 1225:
        raise SystemExit("PDF 应包含 1,225 个不重复字；请确认使用原本的 Year 8 PDF。")

    return words


def extract_existing_week_1_and_2(source_path: Path) -> list[str]:
    if not source_path.is_file():
        raise SystemExit(f"找不到现有 Year 8 资料档：{source_path}")

    source = source_path.read_text(encoding="utf-8")
    match = re.search(
        r"const\s+weekWordLists[^=]*=\s*\{\s*1\s*:\s*\[(.*?)\]\s*,\s*2\s*:\s*\[(.*?)\]\s*,?",
        source,
        flags=re.DOTALL,
    )
    if not match:
        raise SystemExit("无法在现有资料档找到 weekWordLists 的 Week 1 和 Week 2。")

    words: list[str] = []
    for group in match.groups():
        words.extend(
            word.lower()
            for _, word in re.findall(r"(['\"])([A-Za-z-]+)\1", group)
        )

    if len(words) != 60 or len(set(words)) != 60:
        raise SystemExit(
            f"Week 1 和 Week 2 应合共有 60 个不重复字，目前读取到 {len(words)} 个。"
        )

    return words


def format_typescript(weeks: dict[int, list[str]], reserve: list[str]) -> str:
    lines = [
        "// Generated from year-8-spellings.pdf",
        "// Weeks 3-40: 38 weeks x 30 words = 1,140 words",
        "// Five words per line, matching the Year 7 data style.",
        "",
        "export const year8WeekWordLists3To40: Record<number, string[]> = {",
    ]

    for week, words in weeks.items():
        lines.append(f"  {week}: [")
        for start in range(0, len(words), 5):
            group = ", ".join(f'\"{word}\"' for word in words[start : start + 5])
            lines.append(f"    {group},")
        lines.append("  ],")

    lines.extend(
        [
            "};",
            "",
            "// The source PDF contains 25 additional words beyond the 1,200-word plan.",
            "export const year8ReserveWords: string[] = [",
        ]
    )
    for start in range(0, len(reserve), 5):
        group = ", ".join(f'\"{word}\"' for word in reserve[start : start + 5])
        lines.append(f"  {group},")
    lines.extend(["];", ""])
    return "\n".join(lines)


def main() -> None:
    parser = argparse.ArgumentParser(
        description="Generate Year 8 spelling Weeks 3-40 from the supplied PDF."
    )
    parser.add_argument("pdf", type=Path, help="Path to year-8-spellings.pdf")
    parser.add_argument(
        "--existing",
        type=Path,
        default=Path("data/year8SpellingWeeks.ts"),
        help="Existing Year 8 file containing Week 1 and Week 2",
    )
    parser.add_argument(
        "-o",
        "--output",
        type=Path,
        default=Path("data/year8Weeks3To40.ts"),
        help="Output TypeScript file (default: data/year8Weeks3To40.ts)",
    )
    args = parser.parse_args()

    if not args.pdf.is_file():
        raise SystemExit(f"找不到 PDF：{args.pdf}")

    source_words = extract_words(args.pdf)
    used = set(extract_existing_week_1_and_2(args.existing))
    missing = sorted(used.difference(source_words))
    if missing:
        raise SystemExit(f"PDF 找不到 Week 1/2 的字：{', '.join(missing)}")

    remaining = [word for word in source_words if word not in used]
    selected, reserve = remaining[:1140], remaining[1140:]
    weeks = {
        week: selected[(week - 3) * 30 : (week - 2) * 30]
        for week in range(3, 41)
    }

    if any(len(words) != 30 for words in weeks.values()):
        raise SystemExit("生成失败：并非每星期都有 30 个字。")

    args.output.parent.mkdir(parents=True, exist_ok=True)
    args.output.write_text(format_typescript(weeks, reserve), encoding="utf-8")
    print(f"已生成 {args.output}")
    print("Week 3-40：38 星期，每星期 30 字，共 1,140 字")
    print(f"后备字：{len(reserve)} 个")


if __name__ == "__main__":
    main()
