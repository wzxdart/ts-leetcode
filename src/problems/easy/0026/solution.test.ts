import { test } from "bun:test";
import removeDuplicates from "./solution";

test("0026 --test-1", () => {
  const nums = [1, 1, 2];
  const expected = 2;

  const result = removeDuplicates(nums);

  Bun.deepEquals(result, expected);
});

test("0026 --test-2", () => {
  const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
  const expected = 5;

  const result = removeDuplicates(nums);

  Bun.deepEquals(result, expected);
});

test("0026 --test-3", () => {
  const nums = [];
  const expected = 0;

  const result = removeDuplicates(nums);

  Bun.deepEquals(result, expected);
});
