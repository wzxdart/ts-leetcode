const isValid = (str: string): boolean => {
  const stack: string[] = [];
  const map = new Map<string, string>([
    ["{", "}"],
    ["[", "]"],
    ["(", ")"],
  ]);

  for (const char of str) {
    if (map.has(char)) stack.push(char);
    else if (char != map.get(stack.pop()!)) return false;
  }

  return stack.length === 0;
};

export default isValid;
