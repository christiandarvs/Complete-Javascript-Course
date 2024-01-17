function whileLoop() {
  let i = 0;
  while (i < 6) {
    console.log(`Counting Number: ${i}`);
    i++;
  }
  console.log();
}

// ASSIGNMENT
function assignment1() {
  const myNeighbors = [["John", "Mary"], ["Joe"], ["Jane", "Bob", "Steve"]];
  let i = 0;

  while (i < myNeighbors.length) {
    let j = 0;
    while (j < myNeighbors[i].length) {
      console.log(myNeighbors[i][j]);
      j++;
    }
    i++;
  }
}

function calculateWorldPopulation1(population) {
  return (population / 7900) * 100;
}

const calculateWorldPopulation2 = function (population) {
  return (population / 7900) * 100;
};

function assignment2() {
  const countriesPopulation = [115.56, 25.98, 125.12, 51.78];
  const countriesPopulationLength = countriesPopulation.length;

  let percentages2 = [];

  let i = 0;
  while (i < countriesPopulationLength) {
    percentages2[i] = calculateWorldPopulation2(countriesPopulation[i]);
    i++;
  }
  console.log(percentages2);
}

assignment1();
console.log();
assignment2();
