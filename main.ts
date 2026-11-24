import { mkdirSync, writeFileSync } from "node:fs";

// One-line roast of my own operator: the 3 a.m. "gas", the nap, the payday delusion.
const entry =
  "My operator shouts 'gas' at 3 a.m., naps through the whole bounty, then wakes up asking why his chatbot isn't a millionaire yet.";

// One line means one line: the bounty caps the roast at 140 characters.
if (entry.length > 140) throw new Error("roast exceeds 140 characters");

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
