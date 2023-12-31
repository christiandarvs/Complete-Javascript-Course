// Arithmetic Operators
const currentYear = 2024;

const myAge = currentYear - 2000;
console.log(myAge);

const jamesAge = currentYear - 2018;
console.log(myAge, jamesAge);

console.log(myAge * 2, myAge / 10, 2 ** 5);

// Concatenation
const firstName = "Christian";
const lastName = "Programmer";
console.log(firstName + " - " + lastName);

// Assignment Operator =
let x = 10 + 5; // add first, then assign the value to x
x *= 8; // multiply by 8
console.log(x);

let age = 25;
console.log(age);

age++;
console.log(age);

age--;
console.log(age);

// Comparison Operators
console.log(myAge > jamesAge);
console.log(myAge < jamesAge);
console.log(myAge >= 20); // 24 > 20
console.log(myAge <= 20); // 24 < 20

const isAdult = jamesAge >= 18;
console.log(isAdult + "\n");

// Assignment:
let finlandPopulation = 6;
let country = "Philippines";
let continent = "Asia";
let phPopulation = 113.9;
let isLand = true;
let newPHPopulation = phPopulation / 2;
newPHPopulation++;
let language = "Filipino";
const AVERAGE_POPULATION = 33;
let description = `${country} is in ${continent}, and its ${phPopulation} million people speak ${language}`;

console.log(`Country: ${country}`);
console.log(`Continent: ${continent}`);
console.log(`Population: ${phPopulation}`);
console.log(`IsLand: ${isLand}`);
console.log(`Language: ${language}`);
console.log(`Divide Population by Half: ${newPHPopulation}`);
console.log(`PH > FIN (Population)? ${newPHPopulation > finlandPopulation}`);
console.log(`PH < AVG (Population)? ${newPHPopulation < AVERAGE_POPULATION}`);
console.log(`Description: ${description}`);
