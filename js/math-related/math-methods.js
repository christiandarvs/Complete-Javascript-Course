let piValue = 3.1415;
let mathGrade = 95;
let csGrade = 97;

const round = Math.round(piValue);
const floor = Math.floor(piValue); // returns the integer, not decimals
const ceil = Math.ceil(piValue);
const pow = Math.pow(piValue, 2);
const squareRoot = Math.sqrt(piValue);
const absoluteVal = Math.abs(piValue);

const max = Math.max(piValue, mathGrade, csGrade);
const min = Math.min(piValue, mathGrade, csGrade);

console.log(`Round: ${round}`);
console.log(`Floor: ${floor}`);
console.log(`Ceil: ${ceil}`);
console.log(`Exponential: ${pow}`);
console.log(`Square Root: ${squareRoot}`);
console.log(`Absolute Value: ${absoluteVal}`);
console.log(`Maximum Value: ${max}`);
console.log(`Minimum Value: ${min}`);

piValue = Math.PI;
console.log(`PI Value: ${piValue}\n`);

let x = -10.35;
console.log(`Floor: ${Math.floor(x)}`);
console.log(`Ceil: ${Math.ceil(x)}`);

/**
    Math.floor(x): This method rounds x down to the nearest integer. If x is negative, it will become more negative because it's rounding down (towards negative infinity).

    Math.ceil(x): This method rounds x up to the nearest integer. If x is negative, it will become less negative because it's rounding up (towards positive infinity).

    Math.random() is a function in JavaScript that returns a floating-point, pseudo-random number in the range 0 to less than 1 (inclusive of 0, but not 1) with approximately uniform distribution over that range. This is a zero-argument function.

    This will print a random number between 0 (inclusive) and 1 (exclusive) to the console.

    If you want to generate a random number within a specific range, you can do so by multiplying the result by the range size and adding the starting number of the range. For example, to get a random integer between 1 and 10, you could use:
 */
