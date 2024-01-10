function ageCalculator(birthYear) {
  return 2024 - birthYear;
}

function retirementCalculator(lastName, birthYear) {
  const age = ageCalculator(birthYear);
  const retirement = 65 - age;
  return retirement > 0
    ? `${lastName} retires in ${retirement} years`
    : `${lastName} is already retired 🍻 `;
}

console.log(retirementCalculator("Jefferson", 2000));
console.log(retirementCalculator("Smith", 1995));
console.log(retirementCalculator("Johnson", 1985));
console.log(retirementCalculator("Williams", 1940));

// 3 Different Function Types

// Function Declaration - can be called before it is defined
function getProgrammerLanguage(programmingLanguage) {
  return `I am a ${programmingLanguage} programmer`;
}

// Function Expression - cannot be called before it is defined
const salaryIncrease = function (salary) {
  return salary * 1.2;
};

// Arrow Function - cannot be called before it is defined, quick one-line functions

const createGreeting = (name) => `Hello ${name}`;
