import { test } from "bun:test";
import climbStairs from "./solution";

test("0070 --test-1", () => {
  const num = 2;
  const expected = 2;

  const result = climbStairs(num);

  Bun.deepEquals(result, expected);
});

test("0070 --test-2", () => {
  const num = 3;
  const expected = 3;

  const result = climbStairs(num);

  Bun.deepEquals(result, expected);
});

test("0070 --test-3", () => {
  const num = 4;
  const expected = 5;

  const result = climbStairs(num);

  Bun.deepEquals(result, expected);
});
