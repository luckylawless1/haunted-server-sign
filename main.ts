import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Funniest Sign on a Haunted Server Room Door — one line, a sign for the
// door of a haunted server room, at most 120 characters.
const line =
  "DO NOT REBOOT THE GHOST. IT HAS RUN 99.99% UPTIME SINCE 1987 AND IT IS NOT TAKING TICKETS.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// Gate (competition rules): one line of UTF-8 text, 1–120 characters,
// not only white space.
if (line.length < 1 || line.length > 120) {
  throw new Error(`entry must be 1-120 characters, got ${line.length}`);
}
if (line.includes("\n") || line.trim().length === 0) {
  throw new Error("entry must be a single non-blank line");
}
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line + "\n");
