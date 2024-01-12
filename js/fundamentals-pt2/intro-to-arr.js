const programmingLanguages = ["JavaScript", "Python", "Ruby", "Java", "C"];

console.log(programmingLanguages[0]); // JavaScript

// Return array length
const programmingLanguagesLength = programmingLanguages.length;
console.log(`There are ${programmingLanguagesLength} programming languages`);

// Return last item in array
const lastElement = programmingLanguages[programmingLanguagesLength - 1];
console.log(`The last element is ${lastElement}\n`);

var foods = ["pizza", "burger", "chips", "cake", "ice cream"];
console.log(`Foods (Before Update): ${foods}`);
foods[0] = "sushi";
foods[4] = "tacos";
console.log(`Foods (After Update): ${foods}`);

const brands = ["Nike", "Adidas", "Puma", "Reebok", "Under Armour"];
console.log(brands);

const coffee = ["Americano", "Latte", "Cappuccino", "Espresso", "Mocha"];
console.log(coffee);

const techJobs = [
  "Front End Developer",
  "Back End Developer",
  "Full Stack Developer",
  "DevOps Engineer",
  "QA Engineer",
];
console.log(techJobs);

console.log(techJobs[0]);
console.log(techJobs[1]);
console.log(techJobs[2]);
console.log(techJobs[3]);
console.log(techJobs[4]);

// ASSIGNMENT
const countryPopulation = [115.56, 25.98, 125.12, 38.93];
const countryPopulationLength = countryPopulation.length;

const checkPopulation = (population) =>
  countryPopulationLength === 4
    ? console.log("TRUE - 4 elements\n")
    : console.log("FALSE - Not 4 elements\n");

checkPopulation(countryPopulationLength);

const person1 = ["Jonathan", "Smith", 1990, "Programmer", false];
const person2 = ["Jane", "Doe", 1995, "Designer", true];

const birthYears = [1990, 1995, 2000, 2005, 2010];
console.log(birthYears + 50);

console.log(birthYears - 50 + "\n");
