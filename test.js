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
  })
  .then((finalresult) => {
    console.log(finalresult);
  })
  .catch((error) => {
    console.log(error);
  });

const getUserDetails = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve({ id: 1, name: "John" }), 1000);
  });
};

const getAdditionalDetails = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve({ age: 25, location: "New York" }), 3000);
  });
};

getUserDetails()
  .then((result) => {
    console.log("User fetched ", result);
    return getAdditionalDetails().then((additionalDetails) => ({
      userDetails: result,
      additionalDetails,
    }));
  })
  .then((data) => {
    console.log("Additional Details: ", data.additionalDetails);
    return { ...data.userDetails, ...data.additionalDetails };
  })
  .then((fullDetails) => {
    console.log("Full Details: ", fullDetails);
  })
  .catch((error) => {
    console.log(error);
    throw new Error(error);
  });
// ==============================================================================
const isPrimeNumber = (number) => {
  if (number < 2) return false; // 0 and 1 are not prime numbers
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false; // If the number is divisible by any number other than 1 and itself, it's not prime
    }
  }
  return true; // If no divisors were found, the number is prime
};

console.log(isPrimeNumber(8)); // Output: false
console.log(isPrimeNumber(7)); // Output: true
console.log(isPrimeNumber(11)); // Output: true
console.log(isPrimeNumber(8));

// ==============================================================================
const countWords = (sentence) => {
  const words = sentence.split(" ");
  return words.length;
};
console.log(countWords("Hello world! How are you?"));
// ==============================================================================
const findSecondLargestNumber = (arr) => {
  const sortedArray = arr.sort((a, b) => a - b);
  if (sortedArray.length < 2) return null; // If the array has less than 2 numbers
  return sortedArray[sortedArray.length - 2];
};
console.log(findSecondLargestNumber([1, 2, 3, 4]));
// ==============================================================================
const anagramString = (str1, str2) => {
  if (str1.length !== str2.length) return false; // If the strings are not
  const sortedStr1 = str1.split("").sort().join("");
  const sortedStr2 = str2.split("").sort().join("");
  return sortedStr1 === sortedStr2;
};
console.log(anagramString("listen", "silent")); // Output: true

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
