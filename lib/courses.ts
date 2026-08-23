export const YEAR7_SPELLING_COURSE = "year7-spelling" as const;

export const YEAR8_SPELLING_COURSE = "year8-spelling" as const;

export type SpellingCourse =
  | typeof YEAR7_SPELLING_COURSE
  | typeof YEAR8_SPELLING_COURSE;
  