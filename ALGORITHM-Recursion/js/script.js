"use strict";

///////////////////////
// Recursive Function Code-1
///////////////////////

function countDown(num) {
  if (num <= 0) {
    console.log("All done");
    return;
  }

  console.log(num);
  num--;
  countDown(num);
}
countDown(5);
///////////////////////
// Recursive Function Code-2
///////////////////////

// function countDown(num) {
//   for (let i = num; i >= 0; i--) {
//     console.log(i);
//   }
//   console.log("All done");
// }

// countDown(6);

/////////////////////////////
// Recursive Function Code-3
/////////////////////////////

function sumRange(num) {
  if (num === 1) return 1;

  return num + sumRange(num - 1);
}

console.log(sumRange(4));

/////////////////////////////
// Recursive Function Code-4
/////////////////////////////

// function factorial(num) {
//   let total = 1;
//   for (let i = num; i > 0; i--) {
//     total *= i;
//   }
//   return total;
// }

// console.log(factorial(5));

/////////////////////////////
// Recursive Function Code-5
/////////////////////////////

function factorial1(num) {
  if (num === 1) return 1;
  return num * factorial1(num - 1);
}

console.log(factorial1(5));

/////////////////////////////
// Recursive helper Function Code-6
/////////////////////////////

// function collectionOddValue(arr) {
//   let result = [];

//   function helper(input) {
//     if (input.length === 0) {
//       return;
//     }
//     if (input[0] % 2 !== 0) {
//       result.push(input[0]);
//     }
//     helper(input.slice(1));
//   }

//   helper(arr);
//   return result;
// }

// console.log(collectionOddValue([1, 2, 3, 4, 5, 6, 7, 8, 9]));

/////////////////////////////
//Pure Recursive Function Code-7
/////////////////////////////

function collectionOddValue(arr) {
  let newArr = [];

  if (arr.length === 0) {
    return newArr;
  }

  if (arr[0] % 2 !== 0) {
    newArr.push(arr[0]);
  }
  newArr = newArr.concat(collectionOddValue(arr.slice(1)));
  return newArr;
}

console.log(collectionOddValue([1, 2, 3, 4, 5]));
