const addBinary = (str1: string, str2: string): string =>
  (BigInt("0b" + str1) + BigInt("0b" + str2)).toString(2);

export default addBinary;
