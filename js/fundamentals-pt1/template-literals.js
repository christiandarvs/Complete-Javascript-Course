const firstName = "Christian";
const courseName = "Computer Science";
const birthYear = 2000;
let currentYear = 2024;

const introduceSelf =
  "I'm " +
  firstName +
  ", a " +
  courseName +
  " student." +
  " My age is " +
  (currentYear - birthYear) +
  " years old";
console.log("Without Template Literal: ");
console.log(introduceSelf + "\n");

const newIntroduceSelf = `I'm ${firstName}, a ${courseName} student. My age is ${
  currentYear - birthYear
} years old`;
console.log("With Template Literal: ");
console.log(newIntroduceSelf + "\n");

console.log(`JavaScript
Python
R`);
