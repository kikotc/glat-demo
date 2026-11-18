// The team's tasks, and helpers for working with them.

export const STATUSES = ["todo", "doing", "done"];

export const STATUS_LABELS = {
  todo: "To do",
  doing: "In progress",
  done: "Done",
};

export const PEOPLE = {
  kiko: { name: "Kiko", color: "#58a6ff" },
  sam: { name: "Sam", color: "#f0883e" },
};

export const tasks = [
  { id: 1, title: "Write onboarding checklist", status: "todo", owner: PEOPLE.kiko },
  { id: 2, title: "Fix login redirect on Safari", status: "doing", owner: PEOPLE.sam },
  { id: 3, title: "Draft Q3 roadmap", status: "todo", owner: PEOPLE.sam },
  { id: 4, title: "Set up error alerts", status: "done", owner: PEOPLE.kiko },
  { id: 5, title: "Review pricing page copy", status: "doing", owner: PEOPLE.kiko },
  { id: 6, title: "Archive old staging data", status: "todo", owner: PEOPLE.sam },
];

export function byStatus(list, status) {
  return list.filter((task) => task.status === status);
}

export function assignedTo(list, person) {
  return list.filter((task) => task.owner.name === person);
}
