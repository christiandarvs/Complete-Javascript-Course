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
