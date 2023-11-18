// T: O(log(n*m))
// S: O(1)

/* 
  Za svaki element u polju matrix postavljamo hasNum na broj koji
  funckija search nađe ako sama funkcija nije jednaka -1. Ako smo
  dobili hasNum vraćamo true, ako nismo vraćamo false.
*/

function searchMatrix(matrix: number[][], target: number): boolean {
  for (const rowNums of matrix) {
    const hasNum = search(rowNums, target) !== -1;
    if (hasNum) return true;
  }
  return false;
}

function search(nums: number[], target: number): number {
  let first = 0;
  let last = nums.length - 1;

  while (first <= last) {
    let midpoint: number = Math.floor((first + last) / 2);

    if (target === nums[midpoint]) {
      return midpoint;
    } else if (target > nums[midpoint]) {
      first = midpoint + 1;
    } else {
      last = midpoint - 1;
    }
  }

  return -1;
}
