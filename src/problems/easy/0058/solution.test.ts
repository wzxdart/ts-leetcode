import { test } from "bun:test";
import lengthOfLastWord from "./solution";

test("0058 --test-1", () => {
  const str = "Hello World";
  const expected = 5;

  const result = lengthOfLastWord(str);

  Bun.deepEquals(result, expected);
});

test("0058 --test-2", () => {
  const str = "   fly me   to   the moon  ";
  const expected = 4;

  const result = lengthOfLastWord(str);

  Bun.deepEquals(result, expected);
});

test("0058 --test-3", () => {
  const str = "luffy is still joyboy";
  const expected = 6;

  const result = lengthOfLastWord(str);

  Bun.deepEquals(result, expected);
});
