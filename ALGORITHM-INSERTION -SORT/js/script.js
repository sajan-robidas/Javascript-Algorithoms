"use strict";

function insertionSort(arr) {
  for (var i = 1; i < arr.length; i++) {
    var currentVal = arr[i];
    // console.log(currentVal);
    for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j + 1] = arr[j];
      //   console.log(arr);
    }
    arr[j + 1] = currentVal;
    console.log(arr);
  }
  return arr;
}
insertionSort([2, 1, 9, 76, 4]);
