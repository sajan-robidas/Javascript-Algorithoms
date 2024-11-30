"use strict";
/////////////////////////////
// Selection Sort Algorithm
/////////////////////////////

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let lower = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[lower]) {
        lower = j;
      }
    }
    if (i !== lower) {
      let temp = arr[i];
      arr[i] = arr[lower];
      arr[lower] = temp;
    }
  }
  return arr;
}

console.log(selectionSort([5, 9, 11, 13, 33, 55, 1]));

// 0 1 = 0
// 0 2 = 0
// 0 3 = 0
// 0 4 = 0
// 0 5 = 0
// 0 6 = 1
