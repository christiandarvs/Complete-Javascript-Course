// Type Conversion and Coercion

// Conversion - we manually convert the data type by using built-in functions
// Coercion - JS automatically converts the data type (completely hidden from us)

function displayDivider() {
  for (let i = 0; i < 60; i++) {
    process.stdout.write("-");
  }
  console.log();
}

const inputYear = "2000";
console.log("Type Conversion");
// console.log(inputYear + 19); Concatenation: 200019
console.log(Number(inputYear) + 15);

console.log(Number("Earth") + 100); //NaN occurs when we attempt to convert a string (words) to a number and then perform operations on it, resulting in the output being NaN
console.log("Jupiter" * 100);

console.log(String(20), 20);
displayDivider();

console.log("Type Coercion");
console.log("I am " + 30 + " years old"); // Number will be converted into String
console.log("23" - "10" - 3); // Minus Operator triggers the opposite conversion
console.log("23" + "10" + 3);
console.log("23" * "2");
displayDivider();

let n = "1" + 1;
n = n - 1;
console.log(n);

console.log(2 + 3 + 4 + "5");
console.log("10" - "4" - "3" - 2 + "5");
displayDivider();

// ASSIGNMENT
console.log("9" - "5"); // 4
console.log("19" - "13" + "17"); //617
console.log("19" - "13" + 17); //23
console.log("123" < 57); // false
console.log(5 + 6 + "4" + 9 - 4 - 2); // 114 + (3 difference) = 1143
