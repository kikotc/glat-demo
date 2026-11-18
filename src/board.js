// Draws the board: one column per status, one card per task.

import { tasks, STATUSES, STATUS_LABELS, byStatus } from "./tasks.js";
import { filters, renderFilters } from "./filters.js";

const board = document.getElementById("board");
const filterBar = document.getElementById("filters");
let activeFilter = "all";

function card(task) {
  const element = document.createElement("article");
  element.className = "card";
  element.innerHTML = `<p></p>`;
  element.querySelector("p").textContent = task.title;
  return element;
}

function render() {
  const filter = filters.find((f) => f.id === activeFilter);
  const shown = filter.apply(tasks);

  board.replaceChildren(
    ...STATUSES.map((status) => {
      const column = document.createElement("section");
      column.className = "column";
      const heading = document.createElement("h2");
      heading.textContent = STATUS_LABELS[status];
      column.append(heading, ...byStatus(shown, status).map(card));
      return column;
    }),
  );

  renderFilters(filterBar, activeFilter, (id) => {
    activeFilter = id;
    render();
  });
}

render();
