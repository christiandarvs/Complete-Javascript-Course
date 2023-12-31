const age = 15;
const isAllowedToDrive = age >= 18;
console.log(age, isAllowedToDrive);

if (isAllowedToDrive) {
  // execute this block if the condition is true
  console.log("You can start applying for driver's license!");
} else {
  // execute this block whenever the condition is false
  console.log(
    `You are not yet eligible for driver's license! Please wait ${
      18 - age
    } more years.`
  );
}
