// const user_number = Number(prompt("Enter a number: "));

// if (user_number > 1 && user_number <= 10) {
//   console.log("Between 1 and 10");
// } else if (user_number > 10 && user_number <= 20) {
//   console.log("Between 11 and 20");
// } else {
//   console.log("Number is not within the specified ranges.");
// }

// const user_input = prompt("Enter a number: ");
// if (!isNaN(user_input)) {
//   console.log(`You typed ${user_input} which is a number`);
// } else {
//   console.log("Invalid Input...");
// }

// function displayMenu() {
//   alert(
//     "Programming Languages Menu\n1. JavaScript\n2. Python\n3. Java\n4. R\n5. C#\n"

//   );
// }

// function switchSecondExample(choice) {
//   switch (choice) {
//     case 1:
//       alert("You chose JavaScript");
//       break;
//     case 2:
//       alert("You chose Python");
//       break;
//     case 3:
//       alert("You chose Java");
//       break;
//     case 4:
//       alert("You chose R");
//       break;
//     case 5:
//       alert("You chose C#");
//       break;
//     default:
//       alert("Invalid Input");
//       break;
//   }
// }

// displayMenu();
// const choice = Number(prompt("Enter Choice: "));
// switchSecondExample(choice);

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

// const findInformation = prompt(
//   "What information do you want to know about Christian? [firstName, lastName, age, eyeColor, nationality, programmingLang]"
// );

// console.log(person1[findInformation]);
