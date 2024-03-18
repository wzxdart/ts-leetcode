import { test } from "bun:test";
import longestCommonPrefix from "./solution";

test("0014 --test-1", () => {
  const strs = ["flower", "flow", "flight"];
  const expected = "fl";

  const result = longestCommonPrefix(strs);

  Bun.deepEquals(result, expected);
});

test("0014 --test-2", () => {
  const strs = ["dog", "racecar", "car"];
  const expected = "";

  const result = longestCommonPrefix(strs);

  Bun.deepEquals(result, expected);
});

test("0014 --test-3", () => {
  const strs = [];
  const expected = "";

  const result = longestCommonPrefix(strs);

  Bun.deepEquals(result, expected);
});
