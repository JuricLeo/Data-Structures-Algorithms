// T: O(n^2)

function QuickSort(arr: number[], low: number, high: number) {
  if (low < high) {
    const pivot_location = Partition(arr, low, high);
    QuickSort(arr, low, pivot_location);
    QuickSort(arr, pivot_location + 1, high);
  }
}

function Partition(arr: number[], low: number, high: number) {
  let pivot = arr[low];
  let leftwall = low;

  for (let i = low + 1; i <= high; i++) {
    if (arr[i] < pivot) {
      leftwall += 1;
      const temp = arr[i];
      arr[i] = arr[leftwall];
      arr[leftwall] = temp;
    }
  }

  const temp = arr[low];
  arr[low] = arr[leftwall];
  arr[leftwall] = temp;

  return leftwall;
}
