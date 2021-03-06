//Week 1 Day 2

// 1. Write a function that adds two numbers together
function add2Nums(n1, n2) {
  return n1 + n2;
}
const num1 = 5; //testing
const num2 = 12; //testing
console.log(add2Nums(num1, num2));

// 2. Create a function that returns the number of true values there are in an array.
// const testArray = [ true, false, false, true, false, false, false, true, true, true, false ]

const testArray = [
  true,
  false,
  false,
  true,
  false,
  false,
  false,
  true,
  true,
  true,
  false,
];

function findTrueValues(arr) {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === true) {
      result++;
    }
  }
  return result;
}

findTrueValues(testArray);
console.log(findTrueValues(testArray));

// 3. Write a function that receives a car object as an argument and outputs the cars make and model.

let myCar = {
  make: "Dodge",
  model: "Charger",
  color: "Grey",
  year: 2017,
};
function findAuto(car) {
  return car.make + " " + car.model;
  // return {make: car.make, model: car.model}  //returns an object containing make and model
}
console.log(findAuto(myCar));

// 4. Write a function to get the first element in an array.
const familyArray = ["Darie", "Nerissa", "Anouk", "Riessa"];

function getFirstElement(arr) {
  if (arr && arr.length > 0) return arr[0];
}
console.log(getFirstElement(familyArray));

//Week 1 Day 3

// Pyramid problem:
// print:  (using a loop)
// #
// ##
// ###
// ####
// #####

let result = "#";
for (let i = 0; i < 5; i++) {
  console.log(result); // must console brefore result in order to display each
  result = result + "#";
}

// Extra assignment for experts:
// 1. Write a function named assignGrade that takes one argument, a number score.
// Returns a grade for the score, either  "A," "B," "C," "D," or "F." Call that
// function for a few different scores and log the result to make sure it works.

function assignGrade(score) {
  if (score >= 90) {
    return "A";
  } else if (score >= 80) {
    return "B";
  } else if (score >= 70) {
    return "C";
  } else if (score >= 60) {
    return "D";
  } else {
    return "F";
  }
}

console.log(assignGrade(60));

//Week 1 Day 4

// Create a function that takes in a number of two pointers and three pointers made and returns a basketball teams total score?

function pointsMade(numTwoPointers, numThreePointers) {
  return 2 * numTwoPointers + 3 * numThreePointers;
}
console.log(pointsMade(5, 7));

// 2. Create a function that takes an array of numbers & returns both min and max in that order. (use a loop)

function minMaxOfArray(arr) {
  let max = arr[0];
  let min = arr[0];
  for (let i = 0; i < arr.length; ++i) {
    if (arr[i] > max) {
      max = arr[i];
    }
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return [min, max];
}
console.log(minMaxOfArray([100, 3, 70, 20, 5, 80, 0]));

// 3. Create a function that converts a string to uppercase letters:
// let str = ???what a time to be alive!"

let str = "what a time to be alive!";
function convertToCaps(capLetters) {
  return capLetters.toUpperCase();
}
console.log(convertToCaps(str));
