// Remembers the board's view (the filter chosen) between visits.

const KEY = "taskboard:view";

export function loadView() {
  try {
    return JSON.parse(localStorage.getItem(KEY)) ?? { filter: "all" };
  } catch {
    return { filter: "all" };
  }
}

export function saveView(view) {
  try {
    localStorage.setItem(KEY, JSON.stringify(view));
  } catch {
    // Storage unavailable: the view lasts for this visit only.
  }
}
