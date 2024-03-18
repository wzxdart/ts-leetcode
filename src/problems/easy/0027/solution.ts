const removeElement = (nums: number[], target: number): number =>
  nums.splice(0, nums.length, ...nums.filter((num) => num !== target)).length;

export default removeElement;
