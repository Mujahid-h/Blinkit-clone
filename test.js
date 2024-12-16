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
