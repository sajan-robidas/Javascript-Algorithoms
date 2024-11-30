"use strict";

/////////////////////////
// Radix Sort Algorithms
/////////////////////////

function getDigit(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

console.log(getDigit(7323, 2));

////////////////////////////////////
// Radix Sort Algorithms Digit Count
////////////////////////////////////

function digitCount(num) {
  if (num === 0) return 1;

  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

console.log(digitCount(21388));

////////////////////////////////////////
// Radix Sort Algorithms Most Digit Count
////////////////////////////////////////

function mostDigit(nums) {
  let maxDigit = 0;

  for (let i = 0; i < nums.length; i++) {
    maxDigit = Math.max(maxDigit, digitCount(nums[i]));
  }
  return maxDigit;
}

console.log(mostDigit([23, 567, 89, 12234324, 90]));

////////////////////////////////////////
// Radix Sort Algorithms
////////////////////////////////////////

function radixSort(nums) {
  let maxDigitCount = mostDigit(nums);

  for (let k = 0; k < maxDigitCount; k++) {
    let digitBuckets = Array.from({length: 10}, () => []);
    for (let i = 0; i < nums.length; i++) {
      let digit = getDigit(nums[i], k);
      digitBuckets[digit].push(nums[i]);
    }
    console.log(digitBuckets);
    nums = [].concat(...digitBuckets);
    console.log(nums);
  }
  return nums;
}

radixSort([23, 145, 5467, 12, 2345, 985, 2]);
