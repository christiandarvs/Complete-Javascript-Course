// Boolean Logic - branch of CS which uses true and false values to solve complex logical problems

// AND, OR, NOT
function displayDivider() {
  for (let i = 0; i < 60; i++) {
    process.stdout.write("-");
  }
  console.log();
}

const IS_CS_STUDENT = true;
const IS_SOPHOMORE = true;

if (IS_CS_STUDENT && IS_SOPHOMORE) {
  console.log("You are REQUIRED to take this subject: CSPC223");
} else {
  console.log("You are NOT YET required to take this subject");
}
console.log();

if (IS_CS_STUDENT || IS_SOPHOMORE) {
  console.log("You are REQUIRED to take this subject: CSPC223");
} else {
  console.log("You are NOT YET required to take this subject");
}
console.log();

if (!IS_CS_STUDENT) {
  console.log("You are not a CS student");
} else {
  console.log("You are a CS student");
}
console.log();
displayDivider();

const AGE = 18;
const IS_REGISTERED = true;
if (AGE >= 18) {
  if (IS_REGISTERED) {
    console.log("You are allowed to vote");
  } else {
    console.log("Please register before you can vote");
  }
} else {
  console.log("Please ensure that you meet the age requirements");
}
console.log();
displayDivider();

// ASSIGNMENT
function countryForSarah(language, population, isLand) {
  if (language == "English" && population < 50 && !isLand) {
    console.log("You should live in Portugal");
  } else {
    console.log("Portugal does not meet your criteria");
  }
}

let finlandPopulation = 6;
let country = "Philippines";
let continent = "Asia";
let population = 113.9;
let isLand = true;
let newPHPopulation = population / 2;
newPHPopulation++;
let language = "Filipino";
const AVERAGE_POPULATION = 33;
let description = `${country} is in ${continent}, and its ${population} million people speak ${language}`;

console.log(`Country: ${country}`);
console.log(`Continent: ${continent}`);
console.log(`Population: ${population}`);
console.log(`IsLand: ${isLand}`);
console.log(`Language: ${language}`);
console.log(`Divide Population by Half: ${newPHPopulation}`);
console.log(`PH > FIN (Population)? ${newPHPopulation > finlandPopulation}`);
console.log(`PH < AVG (Population)? ${newPHPopulation < AVERAGE_POPULATION}`);
console.log(`Description: ${description}\n`);

if (population > 33) {
  console.log(`${country}'s population is above average`);
} else {
  console.log(`${country}'s population is below average`);
}
displayDivider();

countryForSarah(language, population, isLand);
