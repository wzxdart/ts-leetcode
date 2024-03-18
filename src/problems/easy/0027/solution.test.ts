import { test } from "bun:test";
import removeElement from "./solution";

test("0027 --test-1", () => {
  const nums = [3, 2, 2, 3];
  const target = 3;
  const expected = 2;

  const result = removeElement(nums, target);

  Bun.deepEquals(result, expected);
});

test("0027 --test-2", () => {
  const nums = [0, 1, 2, 2, 3, 0, 4, 2];
  const target = 2;
  const expected = 5;

  const result = removeElement(nums, target);

  Bun.deepEquals(result, expected);
});

test("0027 --test-3", () => {
  const nums = [1];
  const target = 1;
  const expected = 0;

  const result = removeElement(nums, target);

  Bun.deepEquals(result, expected);
});
