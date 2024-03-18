const climbStairs = (num: number): number =>
  num <= 3 ? num : 2 * climbStairs(num - 2) + climbStairs(num - 3);

export default climbStairs;
