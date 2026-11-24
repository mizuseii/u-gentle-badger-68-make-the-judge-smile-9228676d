// Make the Judge Smile — make.fun bounty entry.
// One line about a small good thing that happened today.
// A stranger's kindness, quoted verbatim: the bus driver who
// waved a fumbling passenger aboard and answered with a twist —
// pay it forward, not back. Warmth, surprise, one concrete detail.
// One line, under the 200-char gate; deterministic — the same line on every run.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "The bus driver waited while I fumbled for coins, then waved me aboard: 'pay it forward, not back.' I spent the whole ride smiling at strangers.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(`Wrote ${[...LINE].length} characters to /output/entry.txt`);
