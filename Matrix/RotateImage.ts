/* 
  !!!!!!!!!!!!!!
  Prolazimo kroz sve elemente liste, ali krećemo od (0,1) ili ti prvi element u drugom stupcu (sredina gore).
  Postavljamo temp na taj prvi element, na mjesto tog elementa postavljamo prvi element u
  drugom retku (sredina lijevo), a na mjesto prvog elementa u drugom retku postavljamo temp, to jest prvi 
  element u drugom stupcu. TRANSPONIRAMO MATRICU PO DIJAGONALI.
  Nakon toga samo reversamo matricu unazad i to je to.
*/

function rotate(matrix: number[][]): number[][] {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = i + 1; j < matrix.length; j++) {
      const temp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = temp;
    }
  }

  for (let i = 0; i < matrix.length; i++) {
    matrix[i].reverse();
  }

  return matrix;
}

const result = rotate([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]);
console.log(result);
