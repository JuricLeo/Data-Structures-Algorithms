/* 
  Postavljamo početne korake do vrha na 1. Prolazimo kroz petlju sve do zadnjeg koraka.
  Nakon toga ide čista matematika gdi n - 1 korak uvijek daje točan broj ponavljanja.
  Tipa ako je n = 4, stepsToTopCountOne će biti 3 + 2 i dati 5 što je točan odogovr.
  I tak bude uvijek, doslovno samo matematika.
*/

function climbStairs(n: number): number {
  let stepsToTopCountOne: number = 1;
  let stepsToTopCountTwo: number = 1;

  for (let i = 0; i < n - 1; i++) {
    const temp = stepsToTopCountOne;
    stepsToTopCountOne = stepsToTopCountOne + stepsToTopCountTwo;
    stepsToTopCountTwo = temp;
  }

  return stepsToTopCountOne;
};