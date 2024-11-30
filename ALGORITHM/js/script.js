"use strict";

// Big O Notation

const sajan = function (n) {
  let total = 0;

  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
};

var t1 = performance.now();
sajan(1000000000);

var t2 = performance.now();

console.log(`Timing Elapsed: ${t2 - t1 / 1000} seconds.`);

console.log(sajan(3));
// // Timing our code

function addUpTo(n) {
  return (n * (n + 1)) / 2;
}

var t1 = performance.now();
addUpTo(1000000000);

var t2 = performance.now();

console.log(`Timing Elapsed: ${t2 - t1 / 1000} seconds.`);

console.log(addUpTo(6));

const LogAll = function (n) {
  for (let i = 1; i <= Math.max(5, n); i++) {
    console.log(i);
  }
};

LogAll(9);

// Char Count

function charCount(str) {
  let result = {};

  for (let i = 0; i < str.length; i++) {
    let chat = str[i].toLowerCase();
    // console.log(str[i]);
    console.log(chat);

    if (result[chat] > 0) {
      result[chat]++;

      //   console.log(result[chat]++);
    } else {
      result[chat] = 1;
    }
  }
  return result;
}

function charCount(str) {
  let obj = {};

  for (let i = 0; i < str.length; i++) {
    let chat = str[i].toLowerCase();
    // console.log(str[i]);
    console.log(chat);

    if (/[a-z0-9]/.test(chat) > 0) {
      if (obj[chat] > 0) {
        obj[chat]++;

        //   console.log(result[chat]++);
      } else {
        obj[chat] = 1;
      }
    }
  }
  return obj;
}

function charCount(str) {
  let obj = {};

  for (let chat of str) {
    chat = chat.toLowerCase();
    console.log(chat);

    if (/[a-z0-9]/.test(chat) > 0) {
      obj[chat] = ++obj[chat] || 1;
    }
  }
  return obj;
}

console.log(charCount("HelloHi!"));

// Problem solved Frequency Counter

function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (i = 0; i < arr1.length; i++) {
    let correctIndex = arr2.indexOf(arr1[i] ** 2);
    // console.log(correctIndex);

    if (correctIndex === -1) {
      return false;
    }
    console.log(arr2);
    arr2.splice(correctIndex, 1);
  }
  return true;
}

same([1, 2, 3, 2], [9, 1, 4, 4]);

// Frequency counter

function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  let frequencyCounter1 = {};
  let frequencyCounter2 = {};

  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
    // console.log(frequencyCounter1);
  }

  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
    // console.log(frequencyCounter2[val]);
  }
  console.log(frequencyCounter1);
  console.log(frequencyCounter2);

  for (let key in frequencyCounter1) {
    // console.log(key);
    if (!(key ** 2 in frequencyCounter2)) {
      // console.log(key);
      return false;
    }
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false;
    }
  }

  return true;
}

console.log(same([1, 2, 3, 2, 3], [9, 1, 4, 4, 9]));

// Checking the output

function validAnagram(first, second) {
  if (first.length !== second.length) {
  }

  let lookUp = {};

  for (let i = 0; i < first.length; i++) {
    let letter = first[i];

    lookUp[letter] ? (lookUp[letter] += 1) : (lookUp[letter] = 1);
    // console.log(lookUp[letter]);
  }
  console.log(lookUp);

  for (let i = 0; i < second.length; i++) {
    let letter = second[i];

    if (!lookUp[letter]) {
      return false;
    } else {
      lookUp[letter] -= 1;
    }
  }
  return true;
}
validAnagram("sajan", "das");

validAnagram("anagram", "nagram");

// Multiple Pointer patterns

function sumZero(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      // console.log(arr[i], "sajan");
      // console.log(arr[j], "razan");
      if (arr[i] + arr[j] === 0) {
        console.log(arr[i], arr[j]);
      }
    }
  }
}

sumZero([-4, -3, -2, -1, 0, 1, 2, 5]);

[-4, -3, -2, -1, 0, 1, 2, 5];

// Refactor Multiple patterns

function refactor(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}

console.log(refactor([-4, -3, -2, -1, 0, 1, 2, 5]));

// Count Unique Values

function countUniqueValues(arr) {
  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
    console.log(i, j);
  }
}

countUniqueValues([1, 1, 1, 2, 2, 3, 4, 5, 5, 5, 6, 7]);

// Search algorithm

function search(arr, value) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      return i;
    }
  }
  return -1;
}

// console.log(search([1, 2, 3, 4, 5, 6], 4));

//////////////////////
// Big o Notation
// Timing Our Code
// sum
function addUpTo(n) {
  let total = 0;
  for (let i = 0; i <= n; i++) {
    total += i;
  }
  return total;
}

const t1 = performance.now();
addUpTo(1000000000);
const t2 = performance.now();

console.log(`time elapsed : ${t1 - t2 / 1000}   seconds.`);

function addUpTo1(n) {
  return (n * (n + 1)) / 2;
}

console.log(addUpTo1(100));

// Count Up To Down

function countUpToDown(n) {
  console.log("Going Up");
  for (let i = 0; i <= n; i++) {
    console.log(i);
  }
  console.log("At the Top! \n Going down");

  for (let j = n - 1; j >= 0; j--) {
    console.log(j);
  }
  console.log("back Down");
}

countUpToDown(9);

// nested loop countings

function countAllPair(n) {
  for (let i = 0; i < n; i++) {
    // console.log(i);
    for (let j = 0; j < n; j++) {
      console.log(i, j);
    }
  }
}
countAllPair(3);

function couple(n) {
  for (let i = 0; i < Math.max(5, n); i++) {
    console.log(i);
  }
}
couple(2);

console.log("============logs============");

//////////////////////
// Space Complexity

function spaceCom(arr) {
  let total = 0;

  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
}
console.log(spaceCom([1, 2, 3, 4, 5]));

function double(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    // console.log(i);
    newArr.push(arr[i] * 2);
    // console.log(newArr);
  }
  return newArr;
  // console.log(newArr);
}

console.log(double([1, 2, 3]));

// input tow numbers and calculate sum

function strZero(str) {
  let result = {};
  for (let i = 0; i < str.length; i++) {
    let char = str[i].toLowerCase();
    if (result[char] > 0) {
      result[char]++;
    } else {
      result[char] = 1;
    }
  }
  return result;
}

console.log(strZero("Hello"));

////////////////////////
// Frequency Counter
function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    let correctIndex = arr2.indexOf(arr1[i] ** 2);
    if (correctIndex === -1) {
      return false;
    }

    console.log(arr2);
    arr2.splice(correctIndex, 1);
  }
  return true;
}
same([1, 2, 3, 2], [9, 1, 4, 4]);

function frequency(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  let counter1 = {};
  let counter2 = {};

  for (let val of arr1) {
    counter1[val] = (counter1[val] || 0) + 1;
    console.log(counter1[val]);
  }

  for (let val of arr2) {
    counter2[val] = (counter2[val] || 0) + 1;
    console.log(counter2[val]);
  }

  for (let key in counter1) {
    if (!(key ** 2 in counter2)) {
      return false;
    }

    if (counter2[key ** 2] !== counter1[key]) {
      return false;
    }
  }
  console.log(counter1);
  console.log(counter2);
  return true;
}

frequency([1, 2, 3, 2], [9, 1, 4, 4]);

////////////////////////
// Frequency counter Anagram
function counteAnagram(first, second) {
  if (first.length !== second.length) {
    return false;
  }

  let lookup = {};
  for (let i = 0; i < first.length; i++) {
    let letter = first[i];

    lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
  }
  console.log(lookup);

  for (let i = 0; i < second.length; i++) {
    let letter = second[i];
    if (!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }

  return true;
}

counteAnagram("anagram", "nagaram");

////////////////////////
// Multiple Pointer pattern
function sumZero(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        return [arr[i], arr[j]];
      }
    }
  }
}
console.log(sumZero([-3, -2, -1, 0, 1, 2, 3]));
console.log(sumZero([-2, 0, 1, 3]));

////////////////////////
// Multiple Pointer pattern Refactoring

function sumZero1(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}

console.log(sumZero1([-4, -3, -2, -1, 0, 1, 2, 3, 10]));

////////////////////////
// Counter Unique Value

function counterUniqueValue(arr) {
  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
    console.log(i, j);
  }
  // console.log(i + 1);
}

counterUniqueValue([1, 1, 1, 2, 2, 3, 4, 5, 5, 5, 6, 7]);
// console.log(counterUniqueValue([1, 1, 1, 1, 1, 2]));

console.log("==========Login=========");

////////////////////////
// Sliding Windows

function maxSobarraySum(arr, num) {
  if (num > arr.length) {
    return null;
  }
  let max = -Infinity;
  for (let i = 0; i < arr.length - num + 1; i++) {
    let temp = 0;
    // console.log(arr[i]);
    for (let j = 0; j < num; j++) {
      temp += arr[i + j];
      // console.log(temp);
      if (temp > max) {
        max = temp;
      }
    }
    // console.log(temp, max);
  }
  return max;
}

console.log(maxSobarraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3));

////////////////////////
// Linear search

function search(arr, val) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      return i;
    }
  }
}

console.log(search([1, 2, 3, 4, 5], 4));
