function forLoopExample() {
  for (let i = 1; i < 11; i++) {
    console.log(`Download Progress: ${i}0%`);
  }
}

// ASSIGNMENT
function votingSimulation(numberOfVoters) {
  for (let i = 1; i <= numberOfVoters; i++) {
    console.log(`Voter number ${i} is currently voting`);
  }
}

votingSimulation(50);
