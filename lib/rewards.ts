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