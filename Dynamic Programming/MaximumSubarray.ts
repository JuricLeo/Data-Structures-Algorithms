/* 
  Postavljamo localMax na prvi broj u polju. Postavljamo globalMax na prvi broj u polju.
  Prolazimo kroz cijelo polje od 2. elementa pa do kraja, localMax postavljamo ili na
  broj kroz koji trenutno for petlja prolazi ili na localMax + taj broj, ovisno koji je veći.
  Ako je localMax veći od globalMax postavljamo globalMax na taj localMax.
*/

function maxSubArray(nums: number[]): number {
  let localMax = nums[0];
  let globalMax = localMax;

  for (let i = 1; i < nums.length; i++) {
    localMax = Math.max(nums[i], localMax + nums[i]);
    if (localMax > globalMax) {
      globalMax = localMax;
    }
  }

  return globalMax;
}
