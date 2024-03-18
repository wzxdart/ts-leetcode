const romanToInt = (str: string): number => {
  const map = new Map<string, number>([
    ["I", 1],
    ["V", 5],
    ["X", 10],
    ["L", 50],
    ["C", 100],
    ["D", 500],
    ["M", 1000],
  ]);

  let result = 0;

  for (let i = 0; i < str.length; i++) {
    const curr = map.get(str[i]) || 0;
    const next = map.get(str[i + 1]) || 0;

    result += next > curr ? -1 * curr : curr;
  }

  return result;
};

export default romanToInt;
