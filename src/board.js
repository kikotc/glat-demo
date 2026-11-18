// Draws the board: one column per status, one card per task.

import { getTasks } from "./api.js";
import { STATUSES, STATUS_LABELS, byStatus } from "./tasks.js";
import { filters, renderFilters } from "./filters.js";
import { renderHeader } from "./header.js";

const board = document.getElementById("board");
const filterBar = document.getElementById("filters");
let activeFilter = "all";
let tasks = [];

function card(task) {
  const element = document.createElement("article");
  element.className = "card";
  element.innerHTML = `<p></p><div class="meta"></div>`;
  element.querySelector("p").textContent = task.title;
  element.querySelector(".meta").textContent = task.owner;
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

renderHeader(document.querySelector("header"));
tasks = (await getTasks()).items;
render();
