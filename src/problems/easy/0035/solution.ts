const searchInsert = (nums: number[], target: number): number =>
  [...nums.filter((num) => num < target)].length;

export default searchInsert;
