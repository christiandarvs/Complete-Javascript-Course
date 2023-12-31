const age = 15;
const isAllowedToDrive = age >= 18;
console.log(age, isAllowedToDrive);

if (isAllowedToDrive) {
  // execute this block if the condition is true
  console.log("You can start applying for driver's license!");
} else {
  // execute this block whenever the condition is false
  console.log(
    `You are not yet eligible for driver's license! Please wait ${
      18 - age
    } more years.`
  );
}

/**
 * Control Structure - bcoz this structure allows us to have more control in our code
 * if (condition) {
 *
 * } else {
 *
 * }
 */

const birthYear = 2015;

let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(`Century: ${century}\n`);

// ASSIGNMENT
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
console.log(`Description: ${description}\n`);

if (phPopulation > 33) {
  console.log(`${country}'s population is above average`);
} else {
  console.log(`${country}'s population is below average`);
}
