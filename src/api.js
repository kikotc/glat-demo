// The client for the task API.

export async function getTasks() {
  const res = await fetch("/api/tasks");
  return res.json();
}
