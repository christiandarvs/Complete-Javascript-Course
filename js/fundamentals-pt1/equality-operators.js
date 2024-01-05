function displayDivider() {
  for (let i = 0; i < 60; i++) {
    process.stdout.write("-");
  }
  console.log();
}

const age = 17;
if (age === 18) console.log("Yey! You're an adult!");

console.log(18 === 18);
console.log(18 === 19);
displayDivider();

// STRICT EQUALITY
// == (loose equality) - performs type conversion before comparison
// === (strict equality) - doesn't perform type conversion and checks both value and type

console.log("Loose Equality");
console.log(0 == false);
console.log("" == false);
displayDivider();

console.log("Strict Equality");
console.log(0 === false); // false, different types
console.log(null === undefined); // false
console.log("1" === 1); // false, but in == they are true
console.log("1" == 1);
displayDivider();

// const fave_color = prompt("What's your favorite colour? ");
// console.log(fave_color);

// ASSIGNMENT
const NUM_NEIGHBORS = Number(
  prompt("How many neighbour countries does your country have?")
);
if (NUM_NEIGHBORS == 1) {
  console.log("Only 1 border");
} else if (NUM_NEIGHBORS > 1) {
  console.log("More than 1 border");
} else {
  console.log("No borders");
}
