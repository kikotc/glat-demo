// The team's tasks, and helpers for working with them.

export const STATUSES = ["todo", "doing", "done"];

export const STATUS_LABELS = {
  todo: "To do",
  doing: "In progress",
  done: "Done",
};

export const tasks = [
  { id: 1, title: "Write onboarding checklist", status: "todo", assignee: "Kiko" },
  { id: 2, title: "Fix login redirect on Safari", status: "doing", assignee: "Sam" },
  { id: 3, title: "Draft Q3 roadmap", status: "todo", assignee: "Sam" },
  { id: 4, title: "Set up error alerts", status: "done", assignee: "Kiko" },
  { id: 5, title: "Review pricing page copy", status: "doing", assignee: "Kiko" },
  { id: 6, title: "Archive old staging data", status: "todo", assignee: "Sam" },
];

export function byStatus(list, status) {
  return list.filter((task) => task.status === status);
}

export function assignedTo(list, person) {
  return list.filter((task) => task.assignee === person);
}
