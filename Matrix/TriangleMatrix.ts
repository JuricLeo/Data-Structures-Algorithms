function TriangleMatrix(matrix: number[][]): number[][] {
  const resultUpperLeft: number[] = [];
  const resultUpperRight: number[] = [];
  const resultBottomLeft: number[] = [];
  const resultBottomRight: number[] = [];

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (i <= j) {
        resultUpperRight.push(matrix[i][j]);
      }
      if (i >= j) {
        resultBottomLeft.push(matrix[i][j]);
      }
      if (i <= matrix.length - j - 1) {
        resultUpperLeft.push(matrix[i][j]);
      }
      if (i >= matrix.length - j - 1) {
        resultBottomRight.push(matrix[i][j]);
      }
    }
  }

  return [
    resultUpperLeft,
    resultUpperRight,
    resultBottomLeft,
    resultBottomRight,
  ];
}

const matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
];

const result = TriangleMatrix(matrix);

console.log("Upper left, upper right, bottom left, bottom right:", result);
