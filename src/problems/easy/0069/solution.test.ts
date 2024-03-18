import { test } from "bun:test";
import mySqrt from "./solution";

test("0069 --test-1", () => {
  const num = 4;
  const expected = 2;

  const result = mySqrt(num);

  Bun.deepEquals(result, expected);
});

test("0069 --test-2", () => {
  const num = 8;
  const expected = 4;

  const result = mySqrt(num);

  Bun.deepEquals(result, expected);
});

test("0069 --test-3", () => {
  const num = 0;
  const expected = 0;

  const result = mySqrt(num);

  Bun.deepEquals(result, expected);
});
