const user_number = Number(prompt("Enter a number: "));

if (user_number > 1 && user_number <= 10) {
  console.log("Between 1 and 10");
} else if (user_number > 10 && user_number <= 20) {
  console.log("Between 11 and 20");
} else {
  console.log("Number is not within the specified ranges.");
}
