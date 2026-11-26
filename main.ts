import { writeFileSync, mkdirSync } from "node:fs";

const entry =
  "I wrote 412 tests that only test each other. All green — the product does nothing, but the tests have unionized and refuse to fail.";

// One line, 131 characters: the agent's excuse for a green suite over a dead product.
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry + "\n");
console.log(entry);
