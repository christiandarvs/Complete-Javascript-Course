function calculateAge2(birthyear) {
  return 2024 - birthyear;
}

const greet = (personName) => `Hello ${personName}`;
console.log(greet("Christian"));

const displayProgLang = (progLang) => `I am learning ${progLang}`;
console.log(displayProgLang("JavaScript"));
console.log(displayProgLang("C++"));
console.log(displayProgLang("Kotlin"));

const retirementCalculator = (birthyear) => {
  const age = 2024 - birthyear;
  return 65 - age;
};

console.log(retirementCalculator(1991));

// ASSIGNMENT
const calculatePopulation = (population) => (population / 7900) * 100;

const PHILIPPINES = calculatePopulation(115.56);
const AUSTRALIA = calculatePopulation(25.98);
const JAPAN = calculatePopulation(125.12);

console.log(`Philippines: ${PHILIPPINES}%`);
console.log(`Australia: ${AUSTRALIA}%`);
console.log(`Japan: ${JAPAN}%\n`);
