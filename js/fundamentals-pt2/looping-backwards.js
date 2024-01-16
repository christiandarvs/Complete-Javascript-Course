function loopBackwards() {
  const programmingLanguages = [
    "JavaScript",
    "Python",
    "Java",
    "C#",
    "PHP",
    "Ruby",
  ];
  for (let i = programmingLanguages.length - 1; i >= 0; i--) {
    console.log(programmingLanguages[i]);
  }
}
loopBackwards();

for (let set = 1; set < 4; set++) {
  console.log(`\n== Set ${set} ==`);
  for (let pushup = 1; pushup < 11; pushup++) {
    console.log(`Pushup ${pushup}`);
  }
}
console.log();

// ASSIGNMENT
const myNeighbors = [["John", "Mary"], ["Joe"], ["Jane", "Bob", "Steve"]];
for (let i = 0; i < myNeighbors.length; i++) {
  for (let j = 0; j < myNeighbors[i].length; j++) {
    console.log(myNeighbors[i][j]);
  }
}
