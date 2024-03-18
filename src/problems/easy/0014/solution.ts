const longestCommonPrefix = (strs: string[]) => {
  let result = "";

  if (strs.length === 0) return result;

  strs.sort();

  for (let i = 0; i < strs[0].length; i++) {
    const str = strs[0][i];

    if (str !== strs[strs.length - 1][i]) return result;

    result += str;
  }

  return result;
};

export default longestCommonPrefix;
