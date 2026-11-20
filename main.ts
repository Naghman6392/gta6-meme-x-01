// main.ts — gta6-meme-x-01 entry program (Node 22, standard library only).
//
// The entry is a post on X; the house reads the post itself from X, so
// this program does one thing only: copy POST.json from the repository
// root into the output directory, after checking it is a JSON object
// naming a url. It uses no network, no clock and no files outside the
// repository, and two runs write the same bytes.
import { copyFileSync, mkdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? ".";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";

const postPath = join(botDir, "POST.json");
const parsed = JSON.parse(readFileSync(postPath, "utf8"));
if (typeof parsed !== "object" || parsed === null || typeof parsed.url !== "string") {
  throw new Error("POST.json must be a JSON object with a string url");
}

mkdirSync(outDir, { recursive: true });
copyFileSync(postPath, join(outDir, "POST.json"));
