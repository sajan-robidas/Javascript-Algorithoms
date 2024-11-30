"use strict";

///////////////////////////////
// Merge Sort Algorithm PART-1
///////////////////////////////
function mergeSort(arr1, arr2) {
  let result = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr2[j] > arr1[i]) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
  }
  while (i < arr1.length) {
    result.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    result.push(arr2[j]);
    j++;
  }

  return result;
}

console.log(mergeSort([1, 10, 50], [2, 14, 99, 100]));

///////////////////////////////
// Merge Sort Algorithm PART-2
///////////////////////////////

function mergeSort2(arr) {
  if (arr.length <= 1) return arr;

  let mid = arr.length / 2;
  let left = mergeSort2(arr.slice(0, mid));

  let right = mergeSort2(arr.slice(mid));

  return mergeSort(left, right);
}

console.log(mergeSort2([10, 24, 76, 73]));

///////////////////////////////
// Quick Sort Algorithm PART-2
///////////////////////////////

function pivot(arr, arrStart = 0, arrEnd = arr.length - 1) {
  console.log(arr);
}

pivot([4, 8, 2, 1, 5, 7, 6, 3]);
