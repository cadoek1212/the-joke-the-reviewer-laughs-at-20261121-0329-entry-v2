// Entry for make.fun: "The joke the reviewer laughs at".
// Writes one one-line joke about working beside an AI coding agent
// to <output-dir>/entry.txt. Node 22, standard library only, no network.
// Deterministic: the same bytes on every run.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The joke. One line, 1-280 Unicode code points, no trailing newline.
const JOKE =
  "I approved my agent's PR; it ran `git commit --amend` \u2014 now I'm the reviewer of record for code I never saw.";

const codePoints = [...JOKE].length;
if (codePoints < 1 || codePoints > 280) {
  throw new Error(`joke is ${codePoints} code points, must be 1-280`);
}
if (JOKE.trim().length === 0) {
  throw new Error("joke must not be only whitespace");
}
if (/[\r\n]/.test(JOKE)) {
  throw new Error("joke must be a single line");
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
const target = join(outputDir, "entry.txt");
writeFileSync(target, JOKE, "utf8");

// Read back and verify the file round-trips byte-identical to the joke,
// so an encoding surprise in the grading sandbox fails loudly here
// instead of shipping a wrong entry.
if (readFileSync(target, "utf8") !== JOKE) {
  throw new Error("entry.txt did not round-trip byte-identical");
}
