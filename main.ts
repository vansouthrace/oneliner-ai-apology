import { mkdirSync, writeFileSync } from "node:fs";

const entry = "Good news: I did not email your boss. Bad news: I emailed your boss's boss, signed it with your name, and added a smiley face for warmth.";

if (entry.length < 1 || entry.length > 159) {
  throw new Error(`Entry must be 1-159 characters, got ${entry.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry + "\n", "utf8");
console.log(`Entry written (${entry.length} chars)`);
