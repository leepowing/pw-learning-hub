"use client";

import { useState } from "react";
import Link from "next/link";

// Destination: app/maths/s2/chapter-7/organization-of-data/page.tsx
// Standalone lesson; no additional components or packages are required.
const journeyTimes = [24, 35, 18, 42, 31, 27, 33, 21, 46, 38, 15, 29, 34, 22, 40, 32, 26, 37, 19, 43, 30, 23, 36, 28, 39, 12, 31, 48, 25, 34];
const groupedData = [10, 20, 30, 40].map(lower => ({
  lower,
  upper: lower + 9,
  lowerBoundary: lower - 0.5,
  upperBoundary: lower + 9.5,
  mark: lower + 4.5,
  frequency: journeyTimes.filter(value => value >= lower && value <= lower + 9).length,
}));

type BoundaryExample = {
  id: string;
  button: string;
  title: string;
  context: string;
  interval: string;
  unit: string;
  lower: number;
  upper: number;
  precision: number | null;
};

const boundaryExamples: BoundaryExample[] = [
  { id: "whole", button: "Nearest minute", title: "Times recorded to the nearest minute", context: "The recorded class is 20–29 minutes. The neighbouring recorded values are 19 and 30.", interval: "20–29", unit: "min", lower: 20, upper: 29, precision: 1 },
  { id: "decimal", button: "Nearest 0.1 cm", title: "Lengths recorded to the nearest 0.1 cm", context: "The recorded class is 1.0–1.9 cm. The neighbouring recorded values are 0.9 and 2.0.", interval: "1.0–1.9", unit: "cm", lower: 1, upper: 1.9, precision: 0.1 },
  { id: "explicit", button: "Boundaries already given", title: "An interval defined by an inequality", context: "The class is defined directly as 20 ≤ t < 30 minutes. It includes 20 and excludes 30.", interval: "20 ≤ t < 30", unit: "min", lower: 20, upper: 30, precision: null },
];

// Remove floating-point display noise from measurements such as 1.9 + 0.05.
function clean(value: number) { return Number(value.toFixed(6)); }
function classDetails(example: BoundaryExample) {
  const half = (example.precision ?? 0) / 2;
  const lowerBoundary = clean(example.lower - half);
  const upperBoundary = clean(example.upper + half);
  return { lowerBoundary, upperBoundary, mark: clean((lowerBoundary + upperBoundary) / 2), width: clean(upperBoundary - lowerBoundary), half: clean(half) };
}

function ClassNumberLine({ example }: { example: BoundaryExample }) {
  const { lowerBoundary, upperBoundary, mark, width } = classDetails(example);
  const min = lowerBoundary - width * 0.1;
  const max = upperBoundary + width * 0.1;
  const px = (value: number) => 70 + (value - min) / (max - min) * 560;
  const lowerX = px(lowerBoundary), upperX = px(upperBoundary), markX = px(mark);
  const formattedLimit = (value: number) => example.precision === 0.1 ? value.toFixed(1) : String(value);
  const textStyle = { fontFamily: "Arial, sans-serif", fontSize: 15 };
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 700 322" role="img" aria-label={`Class ${example.interval} ${example.unit}. Lower boundary ${lowerBoundary}, upper boundary ${upperBoundary}, class mark ${mark}, class width ${width}.`} data-boundary-example={example.id} style={{ display: "block", width: "100%", minWidth: 570, height: "auto" }}>
      <text x="350" y="23" textAnchor="middle" fill="#0f766e" style={{ ...textStyle, fontSize: 18, fontWeight: 700 }}>Class width = {width} {example.unit}</text>
      <path d={`M ${lowerX} 46 V 36 H ${upperX} V 46`} fill="none" stroke="#0f766e" strokeWidth="2" />
      <text x={lowerX} y="74" textAnchor="middle" fill="#0f766e" style={textStyle}>Lower boundary</text>
      <text x={lowerX} y="97" textAnchor="middle" fill="#0f766e" style={{ ...textStyle, fontSize: 19, fontWeight: 700 }}>{lowerBoundary}</text>
      <text x={upperX} y="74" textAnchor="middle" fill="#0f766e" style={textStyle}>Upper boundary</text>
      <text x={upperX} y="97" textAnchor="middle" fill="#0f766e" style={{ ...textStyle, fontSize: 19, fontWeight: 700 }}>{upperBoundary}</text>
      <rect x={lowerX} y="112" width={upperX - lowerX} height="46" rx="6" fill="#ccfbf1" data-lower-boundary={lowerBoundary} data-upper-boundary={upperBoundary} />
      <line x1="60" y1="135" x2="645" y2="135" stroke="#172d50" strokeWidth="2" />
      <path d="M 637 129 L 645 135 L 637 141" fill="none" stroke="#172d50" strokeWidth="2" />
      {[lowerBoundary, upperBoundary].map(value => <line key={value} x1={px(value)} y1="112" x2={px(value)} y2="158" stroke="#0f766e" strokeWidth="2.5" />)}
      <line x1={markX} y1="135" x2={markX} y2="259" stroke="#7c3aed" strokeWidth="1.5" strokeDasharray="4 4" />
      <circle cx={markX} cy="135" r="5" fill="#7c3aed" data-class-mark={mark} />
      <text x={markX} y="282" textAnchor="middle" fill="#7c3aed" style={textStyle}>Class mark</text>
      <text x={markX} y="306" textAnchor="middle" fill="#7c3aed" style={{ ...textStyle, fontSize: 19, fontWeight: 700 }}>{mark} {example.unit}</text>
      {example.precision !== null ? <>
        {[{ value: example.lower, label: "Lower class limit" }, { value: example.upper, label: "Upper class limit" }].map(item => <g key={item.label}>
          <circle cx={px(item.value)} cy="135" r="3.5" fill="#172d50" />
          <line x1={px(item.value)} y1="139" x2={px(item.value)} y2="191" stroke="#52657e" strokeWidth="1.5" />
          <text x={px(item.value)} y="214" textAnchor="middle" fill="#52657e" style={textStyle}>{item.label}</text>
          <text x={px(item.value)} y="238" textAnchor="middle" fill="#172d50" style={{ ...textStyle, fontSize: 19, fontWeight: 700 }}>{formattedLimit(item.value)} {example.unit}</text>
        </g>)}
      </> : <>
        <circle cx={lowerX} cy="135" r="5" fill="#0f766e" />
        <circle cx={upperX} cy="135" r="5" fill="white" stroke="#0f766e" strokeWidth="2.5" />
        <text x={lowerX} y="195" textAnchor="middle" fill="#52657e" style={textStyle}>20 included</text>
        <text x={upperX} y="195" textAnchor="middle" fill="#52657e" style={textStyle}>30 excluded</text>
      </>}
    </svg>
  );
}

function Tally({ count }: { count: number }) {
  const groups = Array.from({ length: Math.ceil(count / 5) }, (_, index) => Math.min(5, count - index * 5));
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 115 30" width="115" height="30" role="img" aria-label={`${count} tally marks`} style={{ display: "block", margin: "0 auto", maxWidth: "100%" }}>
    {groups.map((size, group) => <g key={group} stroke="#0f766e" strokeWidth="2.2" strokeLinecap="round">
      {Array.from({ length: Math.min(size, 4) }, (_, i) => <line key={i} x1={group * 38 + 8 + i * 7} y1="6" x2={group * 38 + 8 + i * 7} y2="24" />)}
      {size === 5 && <line x1={group * 38 + 4} y1="25" x2={group * 38 + 33} y2="5" />}
    </g>)}
  </svg>;
}

type PracticeField = { id: string; label: string; answer: number; hint: string; working: string };
const practiceGroups: { title: string; context: string; fields: PracticeField[] }[] = [
  { title: "A · A grouped measurement", context: "Masses of stationery packs are recorded to the nearest gram. Consider the class 60–69 g.", fields: [
    { id: "mass-lower", label: "Lower class boundary (g)", answer: 59.5, hint: "Use half of the recording unit below the lower class limit.", working: "60 − 0.5 = 59.5 g" },
    { id: "mass-upper", label: "Upper class boundary (g)", answer: 69.5, hint: "Use half of the recording unit above the upper class limit.", working: "69 + 0.5 = 69.5 g" },
    { id: "mass-mark", label: "Class mark (g)", answer: 64.5, hint: "Find the midpoint of the two class limits.", working: "(60 + 69) ÷ 2 = 64.5 g" },
    { id: "mass-width", label: "Class width (g)", answer: 10, hint: "Subtract the lower boundary from the upper boundary.", working: "69.5 − 59.5 = 10 g" },
  ] },
  { title: "B · A different recording precision", context: "Volumes are recorded to the nearest 0.1 litre. Consider the class 2.0–2.9 litres.", fields: [
    { id: "volume-lower", label: "Lower class boundary (L)", answer: 1.95, hint: "Half of 0.1 is 0.05. Subtract that from 2.0.", working: "2.0 − 0.05 = 1.95 L" },
    { id: "volume-upper", label: "Upper class boundary (L)", answer: 2.95, hint: "Add half of 0.1 to the upper limit 2.9.", working: "2.9 + 0.05 = 2.95 L" },
    { id: "volume-width", label: "Class width (L)", answer: 1, hint: "Use the two boundaries, rather than 2.9 − 2.0.", working: "2.95 − 1.95 = 1 L" },
  ] },
  { title: "C · Check the total", context: "Four non-overlapping classes contain all 24 observations. The frequencies are 6, 8, 7 and f.", fields: [
    { id: "missing-frequency", label: "Missing frequency, f", answer: 3, hint: "Subtract the three known frequencies from the total.", working: "24 − (6 + 8 + 7) = 3" },
  ] },
];
const practiceFields = practiceGroups.flatMap(group => group.fields);

function matchesAnswer(raw: string, expected: number): boolean {
  const text = raw.trim();
  if (!/^[+-]?(?:\d+(?:\.\d*)?|\.\d+)$/.test(text)) return false;
  const number = Number(text);
  return Number.isFinite(number) && Math.abs(number - expected) < 1e-9;
}

export default function OrganizationOfDataPage() {
  const [selectedClass, setSelectedClass] = useState(1);
  const [exampleIndex, setExampleIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [checked, setChecked] = useState<Record<string, boolean>>({});
  const [showSolutions, setShowSolutions] = useState(false);
  const chosen = groupedData[selectedClass];
  const example = boundaryExamples[exampleIndex];
  const details = classDetails(example);
  const correctCount = practiceFields.filter(field => checked[field.id] && matchesAnswer(answers[field.id] ?? "", field.answer)).length;
  const checkedCount = practiceFields.filter(field => checked[field.id]).length;

  function resetPractice() { setAnswers({}); setChecked({}); setShowSolutions(false); }

  return (
    <main className="organizationPage">
      <Link className="backLink" href="/maths/s2/chapter-7">← Back to Chapter 7</Link>
      <header>
        <p className="eyebrow">S2 · CHAPTER 7 · SECTION 1</p>
        <h1>Organization of Data</h1>
        <p className="introduction">Turn a long list of measurements into a clear frequency table. Learn exactly what each class represents.</p>
        <div className="objectives" aria-label="Learning objectives"><span>Group observations</span><span>Distinguish limits and boundaries</span><span>Calculate marks and widths</span></div>
        <nav className="jumpLinks" aria-label="On this page"><a href="#group-data">Group data</a><a href="#class-language">Key terms</a><a href="#boundaries">Explore boundaries</a><a href="#frequency-table">Build a table</a><a href="#practice">Try it yourself</a></nav>
      </header>

      <section className="lessonCard" id="group-data" aria-labelledby="groupTitle">
        <div className="lessonHeading"><span className="lessonNumber">1</span><div><p className="lessonLabel">START WITH THE OBSERVATIONS</p><h2 id="groupTitle">Why group data into classes?</h2></div></div>
        <p>A <strong>raw data set</strong> lists the individual observations before they are organized. When there are many different values, grouping them into <strong>class intervals</strong> makes the overall pattern easier to see.</p>
        <p>Here are the journey times of <strong>30 students</strong>, recorded to the <strong>nearest minute</strong>. Each tile is one observation, so repeated values still count separately.</p>
        <div className="classButtons" role="group" aria-label="Choose a recorded journey-time class">{groupedData.map((row, index) => <button type="button" key={row.lower} aria-pressed={selectedClass === index} aria-controls="raw-times" onClick={() => setSelectedClass(index)}>{row.lower}–{row.upper} min</button>)}</div>
        <ul className="rawData" id="raw-times" aria-label="Thirty recorded journey times in minutes">{journeyTimes.map((value, index) => {
          const selected = value >= chosen.lower && value <= chosen.upper;
          return <li key={index} className={selected ? "highlighted" : ""} data-observation={value} data-in-class={selected}><span className="srOnly">Observation {index + 1}: </span>{value}<span className="srOnly"> minutes{selected ? ", in the selected class" : ""}</span></li>;
        })}</ul>
        <div className="countStrip" aria-live="polite"><strong>{chosen.frequency} observations</strong> have recorded values from <strong>{chosen.lower} to {chosen.upper} minutes</strong>, inclusive. The frequency of this class is <strong>{chosen.frequency}</strong>.</div>
        <div className="twoColumns"><div className="softPanel"><h3>A class tells us where</h3><p>For these integer records, 20–29 includes 20, 21, …, 29. A recorded value of 30 belongs to the next class.</p></div><div className="softPanel green"><h3>A frequency tells us how many</h3><p>Count every observation in the class once. Two students with the same journey time contribute two observations.</p></div></div>
      </section>

      <section className="lessonCard" id="class-language" aria-labelledby="termsTitle">
        <div className="lessonHeading"><span className="lessonNumber">2</span><div><p className="lessonLabel">THE LANGUAGE OF GROUPED DATA</p><h2 id="termsTitle">One class, six useful ideas</h2></div></div>
        <p>Keep using the class <strong>20–29 minutes</strong>, with times recorded to the nearest minute. Its frequency is 9.</p>
        <div className="tableWrap" tabIndex={0} role="region" aria-label="Vocabulary table; scroll horizontally if needed"><table className="vocabularyTable"><caption>Understand what each number means</caption><thead><tr><th scope="col">Term</th><th scope="col">Meaning</th><th scope="col">This example</th></tr></thead><tbody>
          <tr><th scope="row">Class interval</th><td>A group of values used to organize the observations.</td><td>20–29 min</td></tr>
          <tr><th scope="row">Class limits</th><td>The lowest and highest recorded values included in the stated class.</td><td>Lower: 20<br />Upper: 29</td></tr>
          <tr><th scope="row">Class boundaries</th><td>The dividing values between neighbouring classes, allowing for the recording precision.</td><td>Lower: 19.5<br />Upper: 29.5</td></tr>
          <tr><th scope="row">Class mark</th><td>The midpoint of the class. It is a representative value.</td><td>(20 + 29) ÷ 2 = <strong>24.5 min</strong></td></tr>
          <tr><th scope="row">Class width</th><td>The upper class boundary minus the lower class boundary.</td><td>29.5 − 19.5 = <strong>10 min</strong></td></tr>
          <tr><th scope="row">Frequency</th><td>The number of observations in the class.</td><td><strong>9 students</strong></td></tr>
        </tbody></table></div>
        <div className="formulaGrid"><div><p className="smallLabel">CLASS MARK</p><p className="formula">(lower limit + upper limit) ÷ 2</p><p>You can also average the two class boundaries.</p></div><div><p className="smallLabel">CLASS WIDTH</p><p className="formula">upper boundary − lower boundary</p><p>For 20–29, the width is 10, although 29 − 20 is 9.</p></div></div>
        <p className="note"><strong>A class mark is not a frequency.</strong> Here, 24.5 minutes represents the centre of the class; 9 counts the students in it.</p>
      </section>

      <section className="lessonCard explorerCard" id="boundaries" aria-labelledby="boundariesTitle">
        <div className="lessonHeading"><span className="lessonNumber">3</span><div><p className="lessonLabel">INTERACTIVE NUMBER LINE</p><h2 id="boundariesTitle">Where do neighbouring classes meet?</h2></div></div>
        <p>For times recorded to the nearest minute, the boundary between recorded values 19 and 20 is their midpoint: <strong>(19 + 20) ÷ 2 = 19.5</strong>. Similarly, the boundary between 29 and 30 is <strong>29.5</strong>.</p>
        <div className="ruleBox"><h3>Use half of the recording unit</h3><p>For adjacent classes of rounded measurements:</p><p><strong>Lower boundary = lower limit − half the recording unit</strong><br /><strong>Upper boundary = upper limit + half the recording unit</strong></p><p>Nearest 1 unit → use 0.5. Nearest 0.1 unit → use 0.05.</p></div>
        <div className="exampleButtons" role="group" aria-label="Choose a boundary example">{boundaryExamples.map((item, index) => <button type="button" key={item.id} aria-pressed={exampleIndex === index} aria-controls="boundary-example" onClick={() => setExampleIndex(index)}>{item.button}</button>)}</div>
        <div id="boundary-example" className="boundaryExample"><h3>{example.title}</h3><p>{example.context}</p><div className="diagramScroll" tabIndex={0} role="region" aria-label="Class number line; scroll horizontally on small screens"><ClassNumberLine example={example} /></div>
          <div className="boundaryCalculations" aria-live="polite">
            <div><span>Lower boundary</span><strong>{example.precision === null ? String(example.lower) : `${example.lower} − ${details.half} = ${details.lowerBoundary}`}</strong></div>
            <div><span>Upper boundary</span><strong>{example.precision === null ? String(example.upper) : `${example.upper} + ${details.half} = ${details.upperBoundary}`}</strong></div>
            <div><span>Class mark</span><strong>({example.lower} + {example.upper}) ÷ 2 = {details.mark}</strong></div>
            <div><span>Class width</span><strong>{details.upperBoundary} − {details.lowerBoundary} = {details.width}</strong></div>
          </div>
          <p className="exampleNote">{example.precision === null ? "The inequality already gives the boundaries. Do not subtract or add 0.5. A filled circle means included; an open circle means excluded." : `The shaded band spans the class boundaries. The dark points show recorded class limits; the purple point is the class mark. All measurements here are in ${example.unit}.`}</p>
        </div>
        <p className="warning"><strong>Check how the classes are defined.</strong> The half-unit adjustment depends on the stated recording precision. It is not a rule to apply to every number or every interval.</p>
      </section>

      <section className="lessonCard" id="frequency-table" aria-labelledby="tableTitle">
        <div className="lessonHeading"><span className="lessonNumber">4</span><div><p className="lessonLabel">WORKED EXAMPLE</p><h2 id="tableTitle">Construct a frequency distribution table</h2></div></div>
        <p>Organize the 30 journey times from the first example. We choose equal class widths of 10 minutes.</p>
        <ol className="steps"><li><strong>Choose classes that cover every observation.</strong><p>Use 10–19, 20–29, 30–39 and 40–49. The smallest recorded time is 12 and the largest is 48.</p></li><li><strong>Tally each observation exactly once.</strong><p>Place each time in its class. A diagonal fifth tally completes a group of five.</p></li><li><strong>Count the tallies and check the total.</strong><p>The class frequencies must add up to the number of observations: 4 + 9 + 12 + 5 = 30.</p></li></ol>
        <div className="tableWrap" tabIndex={0} role="region" aria-label="Journey-time frequency table; scroll horizontally if needed"><table className="frequencyTable"><caption>Journey times of 30 students, recorded to the nearest minute</caption><thead><tr><th scope="col">Recorded time (min)</th><th scope="col">Class boundaries (min)</th><th scope="col">Class mark (min)</th><th scope="col">Tally</th><th scope="col">Frequency</th></tr></thead><tbody>{groupedData.map((row, index) => <tr key={row.lower} data-class-row={row.lower} className={selectedClass === index ? "selectedRow" : ""}><th scope="row">{row.lower}–{row.upper}</th><td>{row.lowerBoundary}–{row.upperBoundary}</td><td>{row.mark}</td><td><Tally count={row.frequency} /></td><td><strong>{row.frequency}</strong></td></tr>)}</tbody><tfoot><tr><th scope="row">Total</th><td>—</td><td>—</td><td>—</td><td>{journeyTimes.length}</td></tr></tfoot></table></div>
        <p className="supportText">The highlighted row matches the class you selected in the raw data. In the boundary ranges, use the lower boundary ≤ time &lt; upper boundary, so neighbouring classes share a boundary without counting an observation twice.</p>
        <details className="solution"><summary>Check the class 30–39 step by step</summary><div><p><strong>Limits:</strong> 30 and 39 minutes.</p><p><strong>Boundaries:</strong> 30 − 0.5 = 29.5 and 39 + 0.5 = 39.5 minutes.</p><p><strong>Mark:</strong> (30 + 39) ÷ 2 = 34.5 minutes.</p><p><strong>Width:</strong> 39.5 − 29.5 = 10 minutes.</p><p><strong>Frequency:</strong> 12 observations fall in this class. Count the two occurrences of 31 and the two occurrences of 34 separately.</p></div></details>
        <div className="note"><strong>A missing frequency?</strong> If all other class frequencies and the total are known, subtract the known frequencies from the total. Frequencies are non-negative whole numbers.</div>
      </section>

      <section className="lessonCard" aria-labelledby="mistakesTitle">
        <div className="lessonHeading"><span className="lessonNumber">5</span><div><p className="lessonLabel">MAKE THE GROUPING USEFUL</p><h2 id="mistakesTitle">Keep the pattern and recognize the limits</h2></div></div>
        <div className="twoColumns"><article className="softPanel"><h3>Cover every observation once</h3><p>For integer records, 20–30 and 30–40 overlap at 30. Use classes such as 20–29 and 30–39, or state suitable inequalities clearly.</p><p>Keep any empty class in the chosen sequence and give it a frequency of 0.</p></article><article className="softPanel green"><h3>Choose a useful level of detail</h3><p>Many narrow classes give more detail but can make a table long. A few very wide classes may hide important variation.</p><p>Once you choose the class intervals, use them consistently.</p></article></div>
        <div className="twoColumns"><article className="softPanel"><h3>A midpoint is a representative</h3><p>The class mark 24.5 does not mean that any student actually recorded 24.5 minutes. In this example the recorded times are whole minutes.</p></article><article className="softPanel green"><h3>Grouping loses exact values</h3><p>From the grouped table alone, we know that 12 journeys are in 30–39 minutes. We cannot recover their individual times or their exact mean.</p></article></div>
        <div className="mistakeList"><h3>Three common mistakes</h3><ul><li><strong>Width = 29 − 20 = 9?</strong> Use the boundaries: 29.5 − 19.5 = 10.</li><li><strong>Always subtract and add 0.5?</strong> For nearest 0.1, the adjustment is 0.05.</li><li><strong>Count only different values?</strong> Frequency counts observations, including repeats.</li></ul></div>
      </section>

      <section className="lessonCard practiceCard" id="practice" aria-labelledby="practiceTitle">
        <div className="lessonHeading"><span className="lessonNumber">6</span><div><p className="lessonLabel">TRY IT YOURSELF</p><h2 id="practiceTitle">Can you describe a class accurately?</h2></div></div>
        <p>Enter numbers only; the units are shown beside each question. Check your answers, read the hints and try again.</p>
        <form noValidate onSubmit={event => { event.preventDefault(); setChecked(Object.fromEntries(practiceFields.map(field => [field.id, true]))); }}>
          {practiceGroups.map(group => <fieldset key={group.title} className="practiceGroup"><legend>{group.title}</legend><p>{group.context}</p><div className="answerGrid">{group.fields.map(field => {
            const value = answers[field.id] ?? "";
            const isChecked = checked[field.id] === true;
            const isCorrect = isChecked && matchesAnswer(value, field.answer);
            return <div className="answerField" key={field.id}><label htmlFor={field.id}>{field.label}</label><input id={field.id} type="text" inputMode="decimal" autoComplete="off" value={value} aria-invalid={isChecked && !isCorrect ? true : undefined} aria-describedby={isChecked ? `${field.id}-feedback` : undefined} onChange={event => { setAnswers(previous => ({ ...previous, [field.id]: event.target.value })); setChecked(previous => ({ ...previous, [field.id]: false })); }} />{isChecked && <p id={`${field.id}-feedback`} className={`feedback ${isCorrect ? "correct" : "retry"}`}>{isCorrect ? "Correct." : value.trim() === "" ? "Enter an answer, then check again." : `Try again. ${field.hint}`}</p>}</div>;
          })}</div></fieldset>)}
          <div className="practiceActions"><button type="submit" className="primaryButton">Check answers</button><button type="button" className="secondaryButton" onClick={resetPractice}>Reset practice</button><button type="button" className="secondaryButton" aria-expanded={showSolutions} aria-controls="practice-solutions" onClick={() => setShowSolutions(previous => !previous)}>{showSolutions ? "Hide worked answers" : "Show worked answers"}</button></div>
          <p className="score" role="status" aria-live="polite">{checkedCount === 0 ? "No answers checked yet." : `${correctCount} of ${practiceFields.length} correct · ${checkedCount} answers checked. You can edit an answer and check again.`}</p>
        </form>
        <div id="practice-solutions" hidden={!showSolutions} className="workedAnswers"><h3>Worked answers</h3><ol>{practiceFields.map(field => <li key={field.id}><strong>{field.label}:</strong> {field.working}</li>)}</ol></div>
      </section>

      <section className="summaryCard" aria-labelledby="summaryTitle"><p className="lessonLabel">SECTION 1 · TAKEAWAYS</p><h2 id="summaryTitle">Before drawing a graph, organize the data</h2><ul><li>Use non-overlapping classes that cover every observation.</li><li>Find boundaries using the stated recording precision or interval definition.</li><li>Class mark = midpoint. Class width = upper boundary − lower boundary.</li><li>Count every observation once and check that the frequencies add to the total.</li></ul></section>
      <footer className="lessonFooter"><Link className="primaryLink" href="/maths/s2/chapter-7">← Chapter 7 overview</Link><a href="#group-data">Revisit the raw data ↑</a></footer>

      <style jsx>{`
        .organizationPage { max-width: 1120px; width: calc(100% - 48px); margin: 42px auto 72px; color: #172d50; font-size: 18px; line-height: 1.7; }
        .organizationPage :global(*) { box-sizing: border-box; }
        .organizationPage :global(.backLink) { display: inline-block; color: #047857; font-size: 17px; font-weight: 800; margin-bottom: 26px; text-decoration: none; }
        header { margin-bottom: 31px; }
        .eyebrow, .lessonLabel, .smallLabel { color: #6d28d9; font-size: 13px; letter-spacing: .085em; font-weight: 900; line-height: 1.5; margin: 0 0 8px; }
        h1 { font-size: clamp(34px, 5vw, 51px); line-height: 1.18; letter-spacing: -.025em; margin: 0 0 18px; }
        h2 { font-size: clamp(25px, 3vw, 32px); line-height: 1.3; margin: 0; }
        h3 { font-size: 21px; line-height: 1.4; margin: 0 0 11px; }
        p { margin: 13px 0; }
        .introduction { font-size: 21px; color: #52657e; max-width: 930px; }
        .objectives, .jumpLinks { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 21px; }
        .objectives span { background: #ede9fe; color: #5b21b6; border-radius: 999px; padding: 7px 13px; font-weight: 750; font-size: 14px; }
        .jumpLinks { gap: 10px 22px; }
        .jumpLinks a, .lessonFooter > a { color: #047857; font-size: 16px; font-weight: 800; text-underline-offset: 4px; }
        section[id] { scroll-margin-top: 24px; }
        .lessonCard { padding: 32px; border: 1px solid #d8e1ee; border-radius: 25px; background: white; margin-bottom: 28px; }
        .lessonHeading { display: flex; align-items: flex-start; gap: 18px; margin-bottom: 22px; }
        .lessonNumber { display: grid; place-items: center; width: 54px; height: 54px; flex: 0 0 54px; border-radius: 17px; background: #ede9fe; color: #6d28d9; font-size: 27px; font-weight: 900; }
        .classButtons, .exampleButtons { display: flex; flex-wrap: wrap; gap: 10px; margin: 23px 0 18px; }
        .classButtons button, .exampleButtons button { border: 1px solid #c4b5fd; border-radius: 12px; background: white; color: #5b21b6; padding: 12px 17px; font: inherit; font-size: 16px; font-weight: 800; cursor: pointer; min-height: 46px; }
        .classButtons button[aria-pressed="true"], .exampleButtons button[aria-pressed="true"] { color: white; background: #6d28d9; border-color: #6d28d9; }
        .rawData { display: grid; grid-template-columns: repeat(10, minmax(0, 1fr)); gap: 9px; list-style: none; padding: 0; margin: 18px 0; }
        .rawData li { padding: 9px 4px; text-align: center; font-weight: 750; border: 2px solid #e2e8f0; border-radius: 11px; background: #f8fafc; color: #52657e; }
        .rawData li.highlighted { background: #ede9fe; border-color: #7c3aed; color: #5b21b6; }
        .srOnly { position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0, 0, 0, 0); white-space: nowrap; border: 0; }
        .countStrip { padding: 17px 20px; border-radius: 15px; border: 1px solid #c4b5fd; background: #f5f3ff; color: #5b21b6; }
        .twoColumns { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 19px; margin-top: 22px; }
        .softPanel { padding: 23px; border-radius: 18px; background: #f5f3ff; border: 1px solid #e4dcfb; }
        .softPanel.green { background: #f0fdfa; border-color: #b6e8df; }
        .softPanel p { color: #435a72; font-size: 17px; }
        .softPanel p:last-child { margin-bottom: 0; }
        .tableWrap { max-width: 100%; overflow-x: auto; border-radius: 16px; border: 1px solid #cbd5e1; margin: 22px 0; }
        table { width: 100%; border-collapse: collapse; font-size: 16px; line-height: 1.6; }
        caption { text-align: left; padding: 14px 18px; font-weight: 800; background: #f8fafc; color: #172d50; }
        th, td { padding: 14px 16px; border-top: 1px solid #d8e1ee; text-align: left; vertical-align: middle; }
        thead th { background: #0f766e; color: white; font-weight: 800; }
        tbody th { font-weight: 800; color: #172d50; }
        tbody tr:nth-child(even) { background: #f8fafc; }
        .vocabularyTable { min-width: 640px; }
        .vocabularyTable th:first-child { width: 20%; }
        .vocabularyTable td:last-child { width: 29%; }
        .frequencyTable { min-width: 790px; }
        .frequencyTable th, .frequencyTable td { text-align: center; }
        .frequencyTable .selectedRow { background: #ede9fe; }
        tfoot { background: #f0fdfa; font-weight: 850; }
        .formulaGrid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 18px; }
        .formulaGrid > div { background: #f5f3ff; border-radius: 17px; padding: 21px; }
        .formulaGrid p:last-child { color: #52657e; font-size: 16px; margin-bottom: 0; }
        .formula { font-size: 20px; font-weight: 800; line-height: 1.5; }
        .note { background: #f0fdfa; color: #225a56; border-left: 4px solid #0f766e; padding: 17px 20px; border-radius: 12px; margin-top: 22px; }
        .explorerCard { border-color: #c4b5fd; }
        .ruleBox { padding: 23px; border: 1px solid #b6e8df; background: #f0fdfa; border-radius: 18px; margin-top: 20px; }
        .ruleBox p:last-child { margin-bottom: 0; }
        .boundaryExample { padding: 25px; border-radius: 20px; background: #faf8ff; border: 1px solid #ddd6fe; }
        .boundaryExample > p { color: #52657e; }
        .diagramScroll { overflow-x: auto; max-width: 100%; border: 1px solid #d8e1ee; background: white; padding: 15px 0; border-radius: 16px; margin: 20px 0; }
        .boundaryCalculations { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 13px; }
        .boundaryCalculations > div { background: white; padding: 16px; border-radius: 13px; border: 1px solid #e4dcfb; }
        .boundaryCalculations span { display: block; color: #52657e; font-size: 14px; margin-bottom: 6px; }
        .boundaryCalculations strong { display: block; font-size: 17px; color: #5b21b6; }
        .exampleNote { font-size: 15px; margin-bottom: 0; }
        .warning { background: #fffbeb; border: 1px solid #fde68a; color: #854d0e; border-radius: 14px; padding: 18px 20px; margin: 23px 0 0; font-size: 17px; }
        .steps { padding-left: 26px; }
        .steps li { margin-bottom: 17px; padding-left: 5px; }
        .steps p { color: #52657e; font-size: 17px; margin: 5px 0 0; }
        .supportText { font-size: 15px; color: #52657e; }
        .solution { border: 1px solid #c4b5fd; border-radius: 15px; background: #faf8ff; margin-top: 22px; }
        .solution summary { padding: 17px 21px; color: #5b21b6; font-weight: 800; cursor: pointer; }
        .solution > div { padding: 0 21px 15px; }
        .solution p { font-size: 17px; }
        .mistakeList { padding: 23px; border: 1px solid #fde68a; border-radius: 17px; background: #fffbeb; margin-top: 23px; }
        .mistakeList ul, .summaryCard ul { padding-left: 23px; margin-bottom: 0; }
        .mistakeList li, .summaryCard li { margin: 9px 0; }
        .practiceCard { background: #faf8ff; border-color: #c4b5fd; }
        .practiceGroup { min-width: 0; border: 1px solid #d8e1ee; border-radius: 18px; background: white; padding: 21px; margin: 26px 0; }
        .practiceGroup legend { font-weight: 850; color: #5b21b6; padding: 0 9px; max-width: 100%; font-size: 18px; }
        .practiceGroup > p { margin-top: 0; font-size: 17px; }
        .answerGrid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 19px; }
        .answerField label { display: block; font-size: 16px; font-weight: 750; margin-bottom: 8px; }
        .answerField input { width: 100%; min-width: 0; min-height: 48px; padding: 10px 13px; border: 1px solid #94a3b8; border-radius: 10px; color: #172d50; background: white; font: inherit; font-size: 18px; }
        .answerField input[aria-invalid="true"] { border: 2px solid #b45309; }
        .feedback { padding: 9px 12px; font-size: 15px; border-radius: 9px; line-height: 1.5; margin: 9px 0 0; }
        .feedback.correct { color: #166534; background: #dcfce7; }
        .feedback.retry { color: #92400e; background: #fef3c7; }
        .practiceActions { display: flex; flex-wrap: wrap; gap: 12px; }
        .primaryButton, .secondaryButton { border: 1px solid #6d28d9; border-radius: 12px; padding: 13px 19px; font: inherit; font-size: 16px; font-weight: 800; cursor: pointer; min-height: 47px; }
        .primaryButton { background: #6d28d9; color: white; }
        .secondaryButton { background: white; color: #5b21b6; }
        .score { padding: 14px 18px; background: #ede9fe; border-radius: 12px; color: #5b21b6; font-size: 16px; }
        .workedAnswers { padding: 23px; border: 1px solid #86efac; border-radius: 17px; background: #f0fdf4; margin-top: 20px; }
        .workedAnswers ol { padding-left: 24px; }
        .workedAnswers li { margin: 10px 0; font-size: 16px; }
        .summaryCard { padding: 30px; background: #f0fdfa; border: 1px solid #99f6e4; border-radius: 23px; }
        .summaryCard .lessonLabel { color: #0f766e; }
        .lessonFooter { display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 20px; margin-top: 28px; }
        .organizationPage :global(.primaryLink) { display: inline-block; padding: 14px 20px; color: white; background: #0f766e; border-radius: 13px; font-size: 16px; font-weight: 800; text-decoration: none; }
        .organizationPage :global(a:focus-visible), button:focus-visible, input:focus-visible, summary:focus-visible, .tableWrap:focus-visible, .diagramScroll:focus-visible { outline: 3px solid #2563eb; outline-offset: 4px; }
        @media (max-width: 800px) { .rawData { grid-template-columns: repeat(6, minmax(0, 1fr)); } .twoColumns, .formulaGrid { grid-template-columns: 1fr; } .lessonCard { padding: 26px; } .boundaryExample { padding: 20px; } }
        @media (max-width: 540px) { .organizationPage { width: calc(100% - 28px); margin-top: 27px; font-size: 17px; } .introduction { font-size: 19px; } .lessonCard { padding: 21px 17px; } .lessonHeading { gap: 12px; } .lessonNumber { flex-basis: 42px; width: 42px; height: 42px; font-size: 23px; border-radius: 13px; } .lessonLabel { font-size: 11px; } .rawData { grid-template-columns: repeat(5, minmax(0, 1fr)); gap: 7px; } .boundaryCalculations, .answerGrid { grid-template-columns: 1fr; } .boundaryExample { padding: 17px 12px; } .exampleButtons button, .classButtons button { flex: 1 1 140px; } .practiceGroup { padding: 17px 13px; } .practiceActions button { width: 100%; } .summaryCard { padding: 24px; } }
      `}</style>
    </main>
  );
}
