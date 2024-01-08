// Function declaration
function calculateAge1(birthyear) {
  return 2024 - birthyear;
}

// Function expression
const calculateAge2 = function (birthyear) {
  return 2024 - birthyear;
};

const age1 = calculateAge1(1991);
const age2 = calculateAge2(2010);
console.log(age1, age2);

// Which function should I use? Matter or preference

// ASSIGNMENT
function calculateWorldPopulation1(population) {
  return (population / 7900) * 100;
}

const calculateWorldPopulation2 = function (population) {
  return (population / 7900) * 100;
};

const PHILIPPINES = calculateWorldPopulation1(115.56);
const AUSTRALIA = calculateWorldPopulation1(25.98);
const JAPAN = calculateWorldPopulation1(125.12);

const KOREA = calculateWorldPopulation2(51.78);
const CANADA = calculateWorldPopulation2(38.93);
const GERMANY = calculateWorldPopulation2(83.3);

console.log("Function Declaration");
console.log(`Philippines: ${PHILIPPINES}%`);
console.log(`Australia: ${AUSTRALIA}%`);
console.log(`Japan: ${JAPAN}%\n`);

console.log("Function Expression");
console.log(`Korea: ${KOREA}%`);
console.log(`China: ${CANADA}%`);
console.log(`India: ${GERMANY}%\n`);
