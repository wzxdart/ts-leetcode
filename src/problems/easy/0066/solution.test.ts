import { test } from "bun:test";
import plusOne from "./solution";

test("0066 --test-1", () => {
  const nums = [1, 2, 3];
  const expected = [1, 2, 4];

  const result = plusOne(nums);

  Bun.deepEquals(result, expected);
});

test("0066 --test-2", () => {
  const nums = [4, 3, 2, 1];
  const expected = [4, 3, 2, 2];

  const result = plusOne(nums);

  Bun.deepEquals(result, expected);
});

test("0066 --test-3", () => {
  const nums = [9];
  const expected = [1, 0];

  const result = plusOne(nums);

  Bun.deepEquals(result, expected);
});
