// Entry program: copy the repo's POST.json to the output directory.
// Standard library only; no network access. A pure file copy, so repeated
// runs are byte-identical by construction.
//
// Repository directory, in order of preference:
//   1. the MAKEFUN_BOT_DIR environment variable,
//   2. /bot (the grader's convention).
// Output directory, in order of preference:
//   1. the MAKEFUN_OUTPUT_DIR environment variable,
//   2. /output (the grader's convention).
import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

try {
  mkdirSync(outDir, { recursive: true });
  copyFileSync(join(botDir, "POST.json"), join(outDir, "POST.json"));
} catch (err) {
  console.error(err);
  process.exit(1);
}
