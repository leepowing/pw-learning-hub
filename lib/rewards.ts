const XP_STORAGE_KEY = "pwTotalXP";

export function getTotalXP(): number {
  if (typeof window === "undefined") {
    return 0;
  }

  const savedXP = window.localStorage.getItem(
    XP_STORAGE_KEY
  );

  const parsedXP = Number(savedXP ?? "0");

  return Number.isFinite(parsedXP) ? parsedXP : 0;
}

export function addXP(amount: number): number {
  const safeAmount = Math.max(0, Math.floor(amount));
  const newTotal = getTotalXP() + safeAmount;

  window.localStorage.setItem(
    XP_STORAGE_KEY,
    String(newTotal)
  );

  return newTotal;
}

export function calculateLevel(totalXP: number) {
  const xpPerLevel = 200;
  const level = Math.floor(totalXP / xpPerLevel) + 1;
  const xpInCurrentLevel = totalXP % xpPerLevel;

  return {
    level,
    xpInCurrentLevel,
    xpPerLevel,
  };
}