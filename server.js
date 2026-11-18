// A small server for the board: the files in this folder, plus the task API.
import { createServer } from "node:http";
import { readFile } from "node:fs/promises";
import { extname, join } from "node:path";

const TASKS = [
  { id: 1, title: "Write onboarding checklist", status: "todo", owner: "Kiko" },
  { id: 2, title: "Fix login redirect on Safari", status: "doing", owner: "Sam" },
  { id: 3, title: "Draft Q3 roadmap", status: "todo", owner: "Sam" },
  { id: 4, title: "Set up error alerts", status: "done", owner: "Kiko" },
  { id: 5, title: "Review pricing page copy", status: "doing", owner: "Kiko" },
  { id: 6, title: "Archive old staging data", status: "todo", owner: "Sam" },
];

const PORT = Number(process.env.PORT ?? 4173);

const TYPES = { ".html": "text/html", ".js": "text/javascript", ".css": "text/css" };

createServer(async (req, res) => {
  const url = new URL(req.url, "http://localhost");

  if (url.pathname === "/api/tasks") {
    res.writeHead(200, { "content-type": "application/json" });
    res.end(JSON.stringify(TASKS));
    return;
  }

  try {
    const file = url.pathname === "/" ? "index.html" : url.pathname.slice(1);
    const body = await readFile(join(import.meta.dirname, file));
    res.writeHead(200, { "content-type": TYPES[extname(file)] ?? "text/plain" });
    res.end(body);
  } catch {
    res.writeHead(404);
    res.end("Not found");
  }
}).listen(PORT, () => console.log(`Taskboard on http://localhost:${PORT}`));
