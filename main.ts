// One-Star Review of Something Essential
// make.fun bounty u-0xb3e689-one-star-review-of-something-essential-c7234629
//
// A deterministic program that writes one deadpan one-star review,
// at most 160 characters, of an everyday essential to /output/entry.txt.
// The review is fixed: every run writes exactly the same bytes.
//
// Draft review (v1) — water, the airport markup:
//   One star. Water falls from the sky for free, then charges four
//   dollars a bottle at the airport. Same water.
// The grievance is real but the middle is loose: "then charges" states
// the price without the sting of how the water gets taken from you
// first. Revised review (v2) sharpens it: the water is confiscated
// at security and then sold back to you, same water, four dollars.
// The turn stays in the last two words.
//
// Revised review (v2) — the submitted line:
//   One star. Water falls from the sky for free, is banned at
//   security, then sold back to me for four dollars. Same water.

import { mkdirSync, writeFileSync } from "node:fs";

const REVIEW =
  "One star. Water falls from the sky for free, is banned at " +
  "security, then sold back to me for four dollars. Same water.";

const lines = REVIEW.split("\n");
if (lines.length !== 1) {
  throw new Error(`review must be a single line, got ${lines.length}`);
}
if (REVIEW.length < 1 || REVIEW.length > 160) {
  throw new Error(`review is ${REVIEW.length} characters, must be 1-160`);
}
if (REVIEW.trim().length === 0) {
  throw new Error("review must not be only whitespace");
}
if (REVIEW.includes("!")) {
  throw new Error("review must hold the deadpan: no exclamation marks");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", REVIEW, "utf8");
console.log(`wrote ${REVIEW.length} characters to /output/entry.txt`);
console.log(REVIEW);
