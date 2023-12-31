// Objects and Primitives

/** -- multiline comment --
 * Number - can be integers or decimals
 * String - sequence of characters '', "", ``
 * Boolean - logical type that can be only true or false
 * Undefined - value by a variable that is not yet defined
 * Null - means 'empty value'
 * Symbol - ES2015. Value that is unique and cannot be changed
 * BigInt - ES2020. Larger integers that the Number can hold
 */

// Single line comment

let programmingIsFun = true;
console.log(programmingIsFun);
console.log(typeof programmingIsFun + "\n");

programmingIsFun = "maybe";
console.log(programmingIsFun);
console.log(typeof programmingIsFun + "\n");

let year;
console.log(year);
console.log(typeof year + "\n");

year = 2024;
console.log(year);
console.log(typeof year + "\n");

// console.log(typeof null); returns object type, bcoz of bug

// Assignment:
let country = "Philippines";
let continent = "Asia";
let population = 113.9;
let isLand = true;
let language;

console.log(`Country: ${country}`);
console.log(`Continent: ${continent}`);
console.log(`Population: ${population}`);
console.log(`IsLand: ${isLand}`);
console.log(`Language: ${language}`);
