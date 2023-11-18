/* 
  Ako je grid prazan funkcija se ne izvršava. Postavljamo numberOfIslands na 0.
  Prolazimo kroz sva polja grida i ako se na nekom polju nalazi "1" povećacamo
  broj numberOfIslands za 1 te izvršavamo traverseLand funkciju.
  traverseLand se ne izvrđava ako je element u polju kroz koje trenutno prolazimo
  različit od 1. Postavljamo susjedne lokacije kao adjecentPositions (gore,dole,levo,desno).
  Za svaku od tih kooridinata prolazimo kroz for petlju, postavljamo x i y na te koordinate
  te postavljamo isValidX i Y na true ako je x veči ili jednak 0 i manji od dužine grida 
  ili y veći ili jednak 0 ili manji od dužine prvog rowa.
  Ako su oboje valid i elementu u gridu kroz koji prolazimo je "1", opet prolazimo kroz
  traverseIsland fuknciju kako bi otkrili koji još elementi su otoci.
*/

function numIslands(grid: string[][]): number {
  if (grid.length === 0) return 0;

  let numberOfIslands = 0;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === "1") {
        numberOfIslands++;
        traverseLand(grid, i, j);
      }
    }
  }

  return numberOfIslands;
}

function traverseLand(grid: string[][], i: number, j: number) {
  if (grid[i][j] !== "1") return;
  grid[i][j] = "2";
  const adjacentPositions = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];

  for (let [apx, apy] of adjacentPositions) {
    const [x, y] = [i + apx, j + apy];
    const isValidX = x >= 0 && x < grid.length;
    const isValidY = y >= 0 && y < grid[0].length;
    if (isValidX && isValidY && grid[x][y] === "1") {
      traverseLand(grid, x, y);
    }
  }
}
