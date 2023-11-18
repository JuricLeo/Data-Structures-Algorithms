function spiralOrder(matrix: number[][]): number[] {
  const result: number[] = [];
  let top = 0;
  let right = matrix[0].length;
  let bottom = matrix.length;
  let left = 0;

  while (top < bottom && left < right) {
    for (let i = left; i < right; i++) {
      result.push(matrix[top][i]);
    }
    top++;

    for (let i = top; i < bottom; i++) {
      result.push(matrix[i][right - 1]);
    }
    right--;

    if (top < bottom) {
      for (let i = right - 1; i >= left; i--) {
        result.push(matrix[bottom - 1][i]);
      }
      bottom--;
    }

    if (left < right) {
      for (let i = bottom - 1; i >= top; i--) {
        result.push(matrix[i][left]);
      }
      left++;
    }
  }

  return result;
}

let answer = spiralOrder([
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
]);
console.log(answer);
