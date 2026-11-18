// Statuses, and helpers for working with lists of tasks.

export const STATUSES = ["todo", "doing", "done"];

export const STATUS_LABELS = {
  todo: "To do",
  doing: "In progress",
  done: "Done",
};

export function byStatus(list, status) {
  return list.filter((task) => task.status === status);
}

export function assignedTo(list, person) {
  return list.filter((task) => task.owner === person);
}
