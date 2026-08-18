export function getCurrentStudent() {
  if (typeof window === "undefined") {
    return "guest";
  }

  return window.localStorage.getItem("currentStudent") ?? "guest";
}

