// 5 falsy values: 0, '', undefined, null, NaN
console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(NaN));

const money = 0;
if (money) {
  console.log("Don't spend money hehe");
} else {
  console.log("You should get a job");
}

let height;
if (height) {
  console.log("You have a height");
} else {
  console.log("You don't have a height");
}

// it will return the else statement, because the value of height is undefined
