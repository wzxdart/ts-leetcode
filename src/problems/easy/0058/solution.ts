const lengthOfLastWord = (str: string): number =>
  str.trimEnd().split(" ").pop()!.length;

export default lengthOfLastWord;
