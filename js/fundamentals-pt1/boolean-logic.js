// Boolean Logic - branch of CS which uses true and false values to solve complex logical problems

// AND, OR, NOT
function displayDivider() {
  for (let i = 0; i < 60; i++) {
    process.stdout.write("-");
  }
  console.log();
}

const IS_CS_STUDENT = true;
const IS_SOPHOMORE = true;

if (IS_CS_STUDENT && IS_SOPHOMORE) {
  console.log("You are REQUIRED to take this subject: CSPC223");
} else {
  console.log("You are NOT YET required to take this subject");
}
console.log();

if (IS_CS_STUDENT || IS_SOPHOMORE) {
  console.log("You are REQUIRED to take this subject: CSPC223");
} else {
  console.log("You are NOT YET required to take this subject");
}
console.log();

if (!IS_CS_STUDENT) {
  console.log("You are not a CS student");
} else {
  console.log("You are a CS student");
}
console.log();
displayDivider();

const AGE = 18;
const IS_REGISTERED = true;
if (AGE >= 18) {
  if (IS_REGISTERED) {
    console.log("You are allowed to vote");
  } else {
    console.log("Please register before you can vote");
  }
} else {
  console.log("Please ensure that you meet the age requirements");
}
console.log();
displayDivider();
