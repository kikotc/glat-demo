// The team, from the API.

export async function getUsers() {
  const res = await fetch("/api/users");
  return res.json();
}

export function initials(name) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}
