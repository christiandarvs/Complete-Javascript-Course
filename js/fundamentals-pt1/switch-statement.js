const user_input = 1;

function displayMenu() {
  console.log("Programming Languages Menu");
  console.log("1. JavaScript");
  console.log("2. Python");
  console.log("3. Java");
  console.log("4. R");
  console.log("5. C#\n");
}

function switchFirstExample(user_input) {
  switch (user_input) {
    case 1:
      console.log("Monday");
      break;
    case 2:
      console.log("Tuesday");
      break;
    case 3:
      console.log("Wednesday");
      break;
    case 4:
      console.log("Thursday");
      break;
    case 5:
      console.log("Friday");
      break;
    case 6:
      console.log("Saturday");
      break;
    case 7:
      console.log("Sunday");
      break;
    default:
      console.log("Invalid Input");
      break;
  }
  console.log();
}

function switchSecondExample(choice) {
  switch (choice) {
    case 1:
      console.log("You chose JavaScript");
      break;
    case 2:
      console.log("You chose Python");
      break;
    case 3:
      console.log("You chose Java");
      break;
    case 4:
      console.log("You chose R");
      break;
    case 5:
      console.log("You chose C#");
      break;
    default:
      console.log("Invalid Input");
      break;
  }
}

// switchFirstExample(user_input);
displayMenu();
switchSecondExample(3);
