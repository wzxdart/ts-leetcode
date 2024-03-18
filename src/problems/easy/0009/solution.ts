const isPalindrome = (num: number): boolean => {
  const str = num.toString();

  return str === [...str].reverse().join("");
};

export default isPalindrome;
