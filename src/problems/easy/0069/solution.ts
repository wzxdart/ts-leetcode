const mySqrt = (num: number): number => {
  let left = 0;
  let right = num;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const square = mid * mid;

    if (square < num) left = mid + 1;
    else if (square > num) right = mid - 1;
    else return mid;
  }

  return right;
};

export default mySqrt;
