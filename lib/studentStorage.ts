export function getCurrentStudent() {
  if (typeof window === "undefined") {
    return "guest";
  }

  return window.localStorage.getItem("currentStudent") ?? "guest";
}

export function getStudentStorageKey(key: string) {
  const student = getCurrentStudent();

  return `${student}_${key}`;
}