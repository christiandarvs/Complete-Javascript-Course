"use strict"; // needs to be on the first line of the file

function firstExample() {
  // without strict mode - this function won't do anything
  // with strict mode - this function will throw an error
  let hasDriversLicense = false;
  const passTest = true;

  if (passTest) hasDriversLicense = true;
  if (hasDriversLicense) console.log("I can drive :D");
}

firstExample();

const interface = "Audio"; // reserved word
const private = 534; // reserved word
