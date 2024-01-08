// Function to greet a user
function getUserName(userName) {
  console.log(`Hello ${userName}`);
}

// Function to make espresso
function espressoMaker(milk, coffee) {
  return `Here is your ${milk} ${coffee} ☕️. Enjoy!`;
}

// Function to increment numbers
function incrementNumbers(a, b, c) {
  return [++a, ++b, ++c];
}

// Calling the getUserName function
getUserName("Christian");
getUserName("John");
getUserName("Sarah");
getUserName("Steve");

// Calling the espressoMaker function
const coffee = espressoMaker("soy", "latte");
console.log(coffee);

// Calling the incrementNumbers function
const incrementedNumbers = incrementNumbers(10, 20, 30);
console.log(incrementedNumbers + "\n");

/**
 * A function in programming is a reusable block of code that performs a specific task. Functions are used to break down large programs into smaller, more manageable pieces.
 */

// ASSIGNMENT
function describeCountry(country, population, capitalCity) {
  return `${country} has ${population} million people and its capital city is ${capitalCity}`;
}

const PHILIPPINES = describeCountry("Philippines", 115.56, "Manila");
const AUSTRALIA = describeCountry("Australia", 25.98, "Canberra");
const JAPAN = describeCountry("Japan", 125.12, "Tokyo");

console.log(PHILIPPINES);
console.log(AUSTRALIA);
console.log(JAPAN);
