/* 
  Postavljamo ans kao polje veličine do n+1 i popunjavamo ga s 0.
  significantPowerOfTwo je u početku 1.
  For petlja prolazi kroz sve zadane brojeve od 1, jer 0 već imamo u ans, do
  zadnjeg broja. Ako je broj kroz koji trenutno prolazimo jednak significantPowerOfTwo * 2
  postavljamo significantPowerOfTwo kao taj trenutni broj i on zadržava tu vrijednost kroz cijelu funkciju.
  Idući prolaz kroz funkciju bude novo postavljeni significantPowerOfTwo * 2 pa bude basicly opet duplo veći broj.
  Ako nije nikom niš. i-ti element u ans polju postavljamo na i - significantPowerOfTwo.
*/

function countBits(n: number): number[] {
  const ans = new Array<number>(n + 1).fill(0);
  let significantPowerOfTwo = 1; // 2^0

  for (let i = 1; i <= n; i++) {
    if (i === significantPowerOfTwo * 2) {
      significantPowerOfTwo = i;
    }
    ans[i] = 1 + ans[i - significantPowerOfTwo];
  }

  return ans;
}

/* 
  ans uzima memoriju Uint8Array za mjesta sve do n+1.
  Prolazimo kroz sve brojeve od 0 do dužine n i postavljamo ans od trenutnog elementa na
  ans trenutnog elementa gdi je 1 shiftamo u desno + 1 ako je broj neparni ili 0 ako je broj parni.
  npr: 4: 0100 >> 0010 što je jednako ans[2] ili ti 1, + (4 & 1) kaj je parno pa je 0 i dobivamo 1
  shift basicly radi Math.floor(i/2), dijeli s dva i uzima manji value.
*/

function countBits1(n: number): number[] {
  const ans = new Uint8Array(n + 1);

  for (let i = 0; i < ans.length; i++) {
    ans[i] = ans[i >> 1] + (i & 1);
  }

  return [...ans];
}
