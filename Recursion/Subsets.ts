/* 
  Postavljamo subsets koje je polje s poljima i currentSubsets koje je polje
  gdi stavljamo elemente.
  Imamo funkciju gdi ako je broj koji zadamo jednak dužini nums koje zadajemo
  na početku, pushamo currentSubets polje u subsets polje. To se dogodi tek na kraju.
  U currentSubsets pushamo broj koji je pod indeksom koji smo zadali u backtrack funkciji.
  Nakon toga opet pozivamo backtrack funkciju ali ovaj put dobivamo zadani broj +1.
  Nakon toga ponavljamo sve dok se ne odradi if dio.
  Kad se to dogodi popamo zadnji element iz currentSubseta i to pushamo u subsets.
  Ponovo dolazimo do jednog elementa pa backtrackamo i opet pushamo taj element.
  Uglavnom, svaki "i" mora obaviti backtrack kod sebe i onda jos jednom.
*/

function subsets(nums: number[]): number[][] {
  const subsets: number[][] = [];
  const currentSubsets: number[] = [];

  const backtrack = (i: number) => {
    if (i === nums.length) {
      subsets.push([...currentSubsets]);
      return;
    }
    currentSubsets.push(nums[i]);
    backtrack(i + 1);
    currentSubsets.pop();
    backtrack(i + 1);
  };

  backtrack(0);
  return subsets;
}
