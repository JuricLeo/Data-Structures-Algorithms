// T: O(n^2)
// S: O(1)

function BubbleSort(arr: number[]): number[] {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  return arr;
}

const sorted = BubbleSort([5, 4, 3, 6, 2, 1, 5, 4, 6]);

console.log(sorted);
