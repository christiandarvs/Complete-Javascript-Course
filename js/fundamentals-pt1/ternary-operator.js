function displayDivider() {
  for (let i = 0; i < 60; i++) {
    process.stdout.write("-");
  }
  console.log();
}

const AGE = 25;
AGE >= 18
  ? console.log("I like to drink wine")
  : console.log("I like to drink water");

const SUBJECT = AGE >= 18 ? "Math" : "Science";
console.log(SUBJECT);

// WITHOUT TERNARY
let subject2;
if (AGE >= 18) {
  subject2 = "Physics";
} else {
  subject2 = "Literature";
}
console.log(subject2);

console.log(`I like to drink ${AGE >= 18 ? "wine" : "tea"}`);

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
displayDivider();

switch (language) {
  case "Chinese":
  case "Mandarin":
    console.log("MOST number of native speakers");
    break;
  case "Spanish":
    console.log("2nd place in number of native speakers");
    break;
  case "English":
    console.log("3rd place in number of native speakers");
    break;
  case "Hindi":
    console.log("4th place in number of native speakers");
    break;
  case "Arabic":
    console.log("5th place in number of native speakers");
    break;
  default:
    console.log("Great language too!");
    break;
}
displayDivider();

population > 33
  ? console.log(
      `${country} population is above average (${AVERAGE_POPULATION})`
    )
  : console.log(
      `${country} population is below average (${AVERAGE_POPULATION})`
    );
