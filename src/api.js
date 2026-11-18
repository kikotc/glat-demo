// The client for the task API.

// One page of tasks: { items, next }. Pass `next` back as the cursor for the page after.
export async function getTasks(cursor = 0) {
  const res = await fetch(`/api/tasks?cursor=${cursor}`);
  return res.json();
}
