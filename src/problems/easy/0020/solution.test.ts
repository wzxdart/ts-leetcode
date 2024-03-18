import { test } from "bun:test";
import isValid from "./solution";

test("0020 --test-1", () => {
  const str = "()";
  const expected = true;

  const result = isValid(str);

  Bun.deepEquals(result, expected);
});

test("0020 --test-2", () => {
  const str = "()[]{}";
  const expected = true;

  const result = isValid(str);

  Bun.deepEquals(result, expected);
});

test("0020 --test-3", () => {
  const str = "(]";
  const expected = false;

  const result = isValid(str);

  Bun.deepEquals(result, expected);
});
