function judgeSquareSum(c: number): boolean {
  let first = 0;
  let second = Math.floor(Math.sqrt(c));

  while (first <= second) {
    let sum = first ** 2 + second ** 2;

    if (sum == c) {
      return true;
    }

    if (sum < c) {
      ++first;
    } else {
      --second;
    }
  }

  return false;
}
