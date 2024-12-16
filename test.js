// const str = "Hello World";

// const reverseString = (str) => {
//   return str.split("").reverse().join("");
// };

// console.log(reverseString(str));

// ===============================================================================

// const countOccurence = (arr, element) => {
//   let count = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === element) {
//       count++;
//     }
//   }
//   return count;
// };

// console.log(countOccurence([1, 1, 1, 2, , 4, 5, 3, 5, 6, , 1, 5, 1], 1));

// ==============================================================================

// const doubledArray = (arr) => {
//   return arr.map((element) => element * 2);
// };

// console.log(doubledArray([1, 2, 3, 4]));

// // ==============================================================================

// for (let i = 1; i <= 50; i++) {
//   if (i % 3 === 0 && i % 5 === 0) console.log("FizzBuzz");
//   else if (i % 3 === 0) console.log("Fizz");
//   else if (i % 5 === 0) console.log("Buzz");
//   else console.log(i);
// }

// // ==============================================================================
// const commonElements = (arr1, arr2) => {
//     return arr1.filter((element) => arr2.includes(element));
//   };
//   console.log(commonElements([1, 2, 3, 4], [2, 4, 6, 8])); // [2, 4]

// ==============================================================================

const object = {
  name: "Mujahid",
  class: "BSSE",
  Institute: "UBIT",
};
const addKeyValue = (obj, key, value) => {
  obj[key] = value;
  return obj;
};
console.log(addKeyValue(object, "age", 25));
// Output: { name: "Alice", age: 25 }

// ==============================================================================

const person = { name: "Alice", age: 25, city: "New York" };

const { name, age, city } = person;
console.log(`Name: ${name}, Age: ${age}, City: ${city}`);

// ==============================================================================

const filterOddNumbers = (arr) => arr.filter((num) => num % 2 !== 0);
console.log(filterOddNumbers([1, 2, 3, 4, 5])); // [1, 3, 5]

// ==============================================================================
const sumofArray = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
};
console.log(sumofArray([1, 2, 3, 4, 5]));

// ==============================================================================
const findDuplicates = (arr) => {
  let duplicates = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j] && !duplicates.includes(arr[i])) {
        duplicates.push(arr[i]);
      }
    }
  }
  return duplicates;
};
console.log(findDuplicates([1, 2, 3, 4, 5, , 5, 7, 4, 2]));
// ==============================================================================
const flattenArray = (arr) => {
  let flatArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      flatArray = flatArray.concat(flattenArray(arr[i]));
    }
  }
  return flatArray;
};
console.log(flattenArray([1, [2, 3], [4, [5, 6]]]));
// ==============================================================================
// promise chaining
const fetchedData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve("Data fetched", 1000));
  });
};
fetchedData()
  .then((result) => {
    console.log(result);
    return "Data processing";
  })
  .then((processedData) => {
    console.log(processedData);
    return "solved";
  });
// ==============================================================================
// ==============================================================================
// ==============================================================================
// ==============================================================================
// ==============================================================================
// ==============================================================================
// ==============================================================================
// ==============================================================================
// ==============================================================================
// ==============================================================================
// ==============================================================================
// ==============================================================================
// ==============================================================================
// ==============================================================================
// ==============================================================================
// ==============================================================================
// ==============================================================================
// ==============================================================================
// ==============================================================================
// ==============================================================================
// ==============================================================================
// ==============================================================================
// ==============================================================================
// ==============================================================================
// ==============================================================================
// ==============================================================================
// ==============================================================================
// ==============================================================================
