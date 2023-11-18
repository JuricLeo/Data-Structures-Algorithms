function diagonalSum(mat: number[][]): number {
  let sum = 0;

  for (let i = 0; i < mat.length; i++) {
    sum += mat[i][i];
    if (i !== mat.length - i - 1) {
      sum += mat[i][mat.length - i - 1];
    }
  }

  return sum;
}

const result = diagonalSum([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]);
console.log(result);

/* 
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],

  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
*/
