// let, const ES6 (modern javascript)

// let - to declare variables that are reassignable (mutable)
let year = 2023;
year = 2024;
console.log(year);

// const - declare variables that are not supposed to change (immutable)
const birthYear = 2000;
// birthYear = 1995; will return an error
console.log(birthYear);

/**
 * let or const?
 * use let if you are sure that the value will change at some point in the future
 *
 * use const if you are sure that the value will remain the same
 *
 * avoid var, but this is commonly used in legacy code
 *
 * let: block-scoped
 * var: function-scoped
 */

// ASSIGNMENT:
const country = "Philippines";
const continent = "Asia";
let population = 113.9;
const isLand = true;
let language = "Filipino";

console.log(`Country: ${country}`);
console.log(`Continent: ${continent}`);
console.log(`Population: ${population}`);
console.log(`IsLand: ${isLand}`);
console.log(`Language: ${language}`);
