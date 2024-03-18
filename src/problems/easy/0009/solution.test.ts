import { test } from "bun:test";
import isPalindrome from "./solution";

test("0009 --test-1", () => {
  const num = 121;
  const expected = true;

  const result = isPalindrome(num);

  Bun.deepEquals(result, expected);
});

test("0009 --test-2", () => {
  const num = -121;
  const expected = false;

  const result = isPalindrome(num);

  Bun.deepEquals(result, expected);
});

test("0009 --test-3", () => {
  const num = 10;
  const expected = false;

  const result = isPalindrome(num);

  Bun.deepEquals(result, expected);
});
