function loopArrayDemo() {
  const names = ["John", "Jane", "Jack", "Jill", "James"];
  //      counter     condition   increment
  for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
  }
  console.log();
}

function displayProgrammingLanguages() {
  const programmingLanguages = ["JavaScript", "Python", "Java", "C#", "PHP"];
  for (let i = 0; i < programmingLanguages.length; i++) {
    console.log(programmingLanguages[i]);
  }
  console.log();
}

function performCalculation() {
  const gpa = [3.5, 4.0, 3.2, 3.7, 3.9];
  for (let i = 0; i < gpa.length; i++) {
    gpa[i] = gpa[i] * 2;
  }
  return gpa;
}

function calculateScore(scores) {
  let total = 0;
  let average = 0;
  for (let i = 0; i < scores.length; i++) {
    total += scores[i];
  }
  average = total / scores.length;
  console.log(`Total: ${total}`);
  console.log(`Average: ${average}`);
}

function loopArrayDemo2() {
  const details = [
    "Philippines",
    115.56,
    true,
    "Manila",
    "South East Asia",
    7101,
  ];
  for (let i = 0; i < details.length; i++) {
    if (typeof details[i] !== "string") continue;
    console.log(details[i]);
  }
  console.log();
}

loopArrayDemo();
displayProgrammingLanguages();
const finalGPA = performCalculation();
console.log(finalGPA + "\n");

const scores = [85, 92, 78, 95, 87, 90, 83, 88, 91, 79];
calculateScore(scores);
console.log();

loopArrayDemo2();

// ASSIGNMENT
function calculateWorldPopulation1(population) {
  return (population / 7900) * 100;
}

const calculateWorldPopulation2 = function (population) {
  return (population / 7900) * 100;
};

const countriesPopulation = [115.56, 25.98, 125.12, 51.78];
const countriesPopulationLength = countriesPopulation.length;

let percentages2 = [];
for (let i = 0; i < countriesPopulationLength; i++) {
  percentages2[i] = calculateWorldPopulation1(countriesPopulation[i]);
}
console.log(percentages2);
console.log();

// Manual calculation
const PHILIPPINES = calculateWorldPopulation1(115.56);
const AUSTRALIA = calculateWorldPopulation1(25.98);
const JAPAN = calculateWorldPopulation1(125.12);
const KOREA = calculateWorldPopulation2(51.78);
console.log(`Philippines: ${PHILIPPINES}`);
console.log(`Australia: ${AUSTRALIA}`);
console.log(`Japan: ${JAPAN}`);
console.log(`Korea: ${KOREA}`);

// In conclusion, they produce the same output.
