import { test } from "bun:test";
import strStr from "./solution";

test("0028 --test-1", () => {
  const str = "sadbutsad";
  const target = "sad";
  const expected = 0;

  const result = strStr(str, target);

  Bun.deepEquals(result, expected);
});

test("0028 --test-2", () => {
  const str = "leetcode";
  const target = "leeto";
  const expected = -1;

  const result = strStr(str, target);

  Bun.deepEquals(result, expected);
});

test("0028 --test-3", () => {
  const str = "";
  const target = "";
  const expected = -1;

  const result = strStr(str, target);

  Bun.deepEquals(result, expected);
});
