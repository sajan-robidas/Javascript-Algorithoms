"use strict";

////////////////////////////////
// JavaScript Sorting Algorithm
////////////////////////////////
// Number
function JavaScriptSorting(num1, num2) {
  return num2 - num1;
}
console.log([6, 4, 15, 10].sort(JavaScriptSorting));

////////////////////////////////
// JavaScript Sorting Algorithm
////////////////////////////////
// String

function JavaScriptSorting1(num1, num2) {
  return num2.length - num1.length;
}

console.log(["Sajan", "Raj", "Mukta", "Baba", "Ma"].sort(JavaScriptSorting1));

////////////////////////////////
// Bubble Sorting Algorithm
////////////////////////////////

function bubbleSort(arr) {
  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      //   console.log(arr);
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}

console.log(bubbleSort([37, 45, 29, 8]));

// [37,29,8, 45] step 1
// [29,8,37,45] step 2
// [8,29,37,45] step 3

////////////////////////////////
// Bubble Sorting Optimizing Algorithm
////////////////////////////////

function bubbleSort(arr) {
  let noSwaps;
  for (let i = arr.length; i > 0; i--) {
    noSwaps = true;
    for (let j = 0; j < i - 1; j++) {
      console.log(arr, arr[j], arr[j + 1]);
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }
  return arr;
}

console.log(bubbleSort([37, 45, 29, 8]));
