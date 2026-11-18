// Small date helpers for cards and the header.

export function formatDay(date) {
  return new Intl.DateTimeFormat("en", { month: "short", day: "numeric" }).format(date);
}

export function daysBetween(a, b) {
  const day = 24 * 60 * 60 * 1000;
  return Math.round((b - a) / day);
}
