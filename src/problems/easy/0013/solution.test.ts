import { test } from "bun:test";
import romanToInt from "./solution";

test("0013 --test-1", () => {
  const str = "III";
  const expected = 3;

  const result = romanToInt(str);

  Bun.deepEquals(result, expected);
});

test("0013 --test-2", () => {
  const str = "LVIII";
  const expected = 58;

  const result = romanToInt(str);

  Bun.deepEquals(result, expected);
});

test("0013 --test-3", () => {
  const str = "MCMXCIV";
  const expected = 1994;

  const result = romanToInt(str);

  Bun.deepEquals(result, expected);
});
