// The filters shown above the board. Each one narrows the task list.

import { assignedTo } from "./tasks.js";

export const filters = [
  { id: "all", label: "All", apply: (list) => list },
  { id: "mine", label: "Mine", apply: (list) => assignedTo(list, "Kiko") },
];

export function renderFilters(container, activeId, onChange) {
  container.replaceChildren(
    ...filters.map((filter) => {
      const button = document.createElement("button");
      button.textContent = filter.label;
      button.setAttribute("aria-pressed", String(filter.id === activeId));
      button.addEventListener("click", () => onChange(filter.id));
      return button;
    }),
  );
}
