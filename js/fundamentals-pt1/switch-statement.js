const user_input = 1;
function displayDivider() {
  for (let i = 0; i < 60; i++) {
    process.stdout.write("-");
  }
  console.log();
}

function displayMenu() {
  console.log("Programming Languages Menu");
  console.log("1. JavaScript");
  console.log("2. Python");
  console.log("3. Java");
  console.log("4. R");
  console.log("5. C#\n");
}

function switchFirstExample(user_input) {
  switch (user_input) {
    case 1:
      console.log("Monday");
      break;
    case 2:
      console.log("Tuesday");
      break;
    case 3:
      console.log("Wednesday");
      break;
    case 4:
      console.log("Thursday");
      break;
    case 5:
      console.log("Friday");
      break;
    case 6:
      console.log("Saturday");
      break;
    case 7:
      console.log("Sunday");
      break;
    default:
      console.log("Invalid Input");
      break;
  }
  console.log();
}

function switchSecondExample(choice) {
  switch (choice) {
    case 1:
      console.log("You chose JavaScript");
      break;
    case 2:
      console.log("You chose Python");
      break;
    case 3:
      console.log("You chose Java");
      break;
    case 4:
      console.log("You chose R");
      break;
    case 5:
      console.log("You chose C#");
      break;
    default:
      console.log("Invalid Input");
      break;
  }
}

// switchFirstExample(user_input);
displayMenu();
switchSecondExample(3);
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
