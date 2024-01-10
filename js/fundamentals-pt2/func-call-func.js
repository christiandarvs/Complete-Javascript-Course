function espressoShots(number) {
  return number * 7;
}

function coffeeMaker(milk, coffee, shots) {
  const percentageOfEspresso = espressoShots(shots);
  return `Here is your ${milk} ${coffee} with ${percentageOfEspresso} grams of coffee grounds. Enjoy!`;
}

const order1 = coffeeMaker("soy", "latte", 2);
const order2 = coffeeMaker("coconut", "mocha", 1);
const order3 = coffeeMaker("whole milk", "flat white", 3);

console.log(`Order 1: ${order1}\n`);
console.log(`Order 2: ${order2}\n`);
console.log(`Order 3: ${order3}\n`);

// ASSIGNMENT
function calculateWorldPopulation1(population) {
  return (population / 7900) * 100;
}

function describePop(population, country) {
  const populationPercentage = calculateWorldPopulation1(population);
  return `${country} has ${population} million people, which is about ${populationPercentage}% of the world.`;
}

const PHILIPPINES = describePop(115.56, "Philippines");
const AUSTRALIA = describePop(25.98, "Australia");
const JAPAN = describePop(125.12, "Japan");

console.log(`PHILIPPINES: ${PHILIPPINES}\n`);
console.log(`AUSTRALIA: ${AUSTRALIA}\n`);
console.log(`JAPAN: ${JAPAN}\n`);
