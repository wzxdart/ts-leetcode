const plusOne = (nums: number[]): number[] =>
  [...(BigInt(nums.join("")) + BigInt(1)).toString()].map((num) => Number(num));

export default plusOne;
