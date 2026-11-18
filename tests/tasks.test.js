import { test } from "node:test";
import assert from "node:assert/strict";
import { byStatus, assignedTo } from "../src/tasks.js";

const list = [
  { id: 1, status: "todo", owner: "Kiko" },
  { id: 2, status: "done", owner: "Sam" },
];

test("byStatus keeps one column's tasks", () => {
  assert.deepEqual(byStatus(list, "todo").map((t) => t.id), [1]);
});

test("assignedTo keeps one person's tasks", () => {
  assert.deepEqual(assignedTo(list, "Sam").map((t) => t.id), [2]);
});
