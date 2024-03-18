import { test } from "bun:test";
import searchInsert from "./solution";

test("0035 --test-1", () => {
  const nums = [1, 3, 5, 6];
  const target = 5;
  const expected = 2;

  const result = searchInsert(nums, target);

  Bun.deepEquals(result, expected);
});

test("0035 --test-2", () => {
  const nums = [1, 3, 5, 6];
  const target = 2;
  const expected = 1;

  const result = searchInsert(nums, target);

  Bun.deepEquals(result, expected);
});

test("0035 --test-3", () => {
  const nums = [1, 3, 5, 6];
  const target = 7;
  const expected = 4;

  const result = searchInsert(nums, target);

  Bun.deepEquals(result, expected);
});
