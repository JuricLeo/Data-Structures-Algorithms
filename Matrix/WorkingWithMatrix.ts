// Zbrajanje matrica

function Addition() {
  const A: number[][] = [
    [1, 2],
    [3, 4],
  ];
  const B: number[][] = [
    [5, 6],
    [7, 8],
  ];
  const result: number[][] = A.map((row, i) =>
    row.map((val, j) => val + B[i][j])
  );

  console.log(result); 
  // [[6,8], [10, 12]] Uglavnom prvi iz prve se zbraja s prvim iz druge itd, drugi iz prve sa drugim iz druge itd...
}

// Množenje matrica

function Multiplication() {
  const A: number[][] = [
    [1, 2],
    [3, 4],
  ];
  const B: number[][] = [
    [5, 6],
    [7, 8],
  ];
  const result: number[][] = A.map((rowA, i) =>
    B[0].map((colB, j) => rowA.reduce((sum, val, k) => sum + val * B[k][j], 0))
  );

  console.log(result) 
  // [[19, 22], [43, 50]] Uglavnom ide prvi iz A * prvi iz B + drugi iz A * treci iz B
  // I tak nastavlja, prvi iz A * drugi iz B + drugi iz A * cetvrti iz B
  // Treci iz A * prvi iz B + cetvrti iz A * treci iz B
  // Treci iz A * drugi iz B + cetrvrti iz A * cetvrti iz B
}

//