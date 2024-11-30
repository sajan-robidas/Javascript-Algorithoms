"use strict";

////////////////////////////
// Algorithms Linear Search
////////////////////////////

function LinearSearch(arr, val) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      return i;
    }
  }
  return -1;
}

console.log(LinearSearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 6));

////////////////////////////
// Algorithms binary Search
////////////////////////////

function binarySearch(arr, elem) {
  let starts = 0;
  let end = arr.length - 1;

  let middle = Math.floor((starts + end) / 2);
  //   console.log(starts, middle, end);

  while (arr[middle] !== elem && starts <= end) {
    // console.log(arr[middle]);
    if (elem < arr[middle]) {
      end = middle - 1;
    } else {
      starts = middle + 1;
    }
    middle = Math.floor((starts + end) / 2);
  }

  if (arr[middle] === elem) {
    return middle;
  }
  return -1;
}

console.log(binarySearch([2, 5, 6, 9, 13, 15, 28, 30], 15));

// binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], 7);
//               l              m                e

////////////////////////////////////////
// Algorithms Naive String binary Search
////////////////////////////////////////
console.log("========STRING========");

function stringSearch(long, sort) {
  let count = 0;
  for (let i = 0; i < long.length; i++) {
    for (let j = 0; j < sort.length; j++) {
      console.log(sort[j], long[i + j]);
      if (sort[j] !== long[i + j]) break;
      if (j === sort.length - 1) count++;
    }
  }
  return count;
}

console.log(stringSearch("lorie loled", "lol"));
