import { test } from "bun:test";
import addBinary from "./solution";

test("0067 --test-1", () => {
  const str1 = "11";
  const str2 = "1";
  const expected = "100";

  const result = addBinary(str1, str2);

  Bun.deepEquals(result, expected);
});

test("0067 --test-2", () => {
  const str1 = "1010";
  const str2 = "1011";
  const expected = "10101";

  const result = addBinary(str1, str2);

  Bun.deepEquals(result, expected);
});

test("0067 --test-3", () => {
  const str1 = "0";
  const str2 = "0";
  const expected = "0";

  const result = addBinary(str1, str2);

  Bun.deepEquals(result, expected);
});
