import { test } from "bun:test";
import twoSum from "./solution";

test("0001 --test-1", () => {
  const nums = [2, 7, 11, 15];
  const target = 9;
  const expected = [0, 1];

  const result = twoSum(nums, target);

  Bun.deepEquals(result, expected);
});

test("0001 --test-2", () => {
  const nums = [3, 2, 4];
  const target = 6;
  const expected = [1, 2];

  const result = twoSum(nums, target);

  Bun.deepEquals(result, expected);
});

test("0001 --test-3", () => {
  const nums = [3, 3];
  const target = 6;
  const expected = [0, 1];

  const result = twoSum(nums, target);

  Bun.deepEquals(result, expected);
});
