// T: O(n^2)

// [1,4,3,6,2,5,5,4,6]
// [1,2,3,6,4,5,5,4,6]
// [1,2,3,4,6,5,5,4,6]
// [1,2,3,4,4,5,5,6,6]

function SelectionSort(arr: number[]): number[] {
  for (let i = 0; i < arr.length; i++) {
    let min = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }

    const temp = arr[min];
    arr[min] = arr[i];
    arr[i] = temp;
  }

  return arr;
}

const sorted = SelectionSort([5, 4, 3, 6, 2, 1, 5, 4, 6]);

console.log(sorted);
