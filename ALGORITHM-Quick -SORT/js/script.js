" use strict";

function pivot(arr, start = 0, end = arr.length + 1) {
  function swap(array, i, j) {
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  let pivot = arr[start];
  //   console.log(pivot);
  let sweepIdx = start;

  for (let i = start; i < arr.length; i++) {
    // console.log(arr[i]);
    if (pivot > arr[i]) {
      sweepIdx++;
      swap(arr, sweepIdx, i);
      console.log(arr);
    }
  }
  swap(arr, start, sweepIdx);
  return sweepIdx;
}

console.log(pivot([4, 8, 2, 1, 5, 7, 6, 3]));

////////////////////////
// Quick Sort Algorithm
////////////////////////

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right);
    quickSort(arr, left, pivotIndex - 1);
    quickSort(arr, right, pivotIndex + 1);
  }
  return arr;
}

console.log(quickSort([4, 6, 9, 1, 2, 5, 3]));
