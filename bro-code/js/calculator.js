function checkIfEmpty(firstNumber, secondNumber, result) {
  if (firstNumber === "" && secondNumber === "") {
    alert("Both numbers are EMPTY!");
  } else if (firstNumber === "") {
    alert("First Number is EMPTY!");
  } else if (secondNumber === "") {
    alert("Second Number is EMPTY!");
  } else {
    if (secondNumber === 0) {
      document.querySelector(
        "#result"
      ).textContent = `Result: Cannot Divide by Zero!`;
    } else {
      document.querySelector("#result").textContent = `Result: ${result}`;
    }
  }
}

document.querySelector("#addBtn").addEventListener("click", function () {
  const firstNumber = document.querySelector("#firstNumInput").value;
  const secondNumber = document.querySelector("#secondNumInput").value;
  const sum = Number(firstNumber) + Number(secondNumber);
  checkIfEmpty(firstNumber, secondNumber, sum);
});

document.querySelector("#subtractBtn").addEventListener("click", function () {
  const firstNumber = document.querySelector("#firstNumInput").value;
  const secondNumber = document.querySelector("#secondNumInput").value;
  const difference = Number(firstNumber) - Number(secondNumber);
  checkIfEmpty(firstNumber, secondNumber, difference);
});

document.querySelector("#multiplyBtn").addEventListener("click", function () {
  const firstNumber = document.querySelector("#firstNumInput").value;
  const secondNumber = document.querySelector("#secondNumInput").value;
  const product = Number(firstNumber) * Number(secondNumber);
  checkIfEmpty(firstNumber, secondNumber, product);
});

document.querySelector("#divideBtn").addEventListener("click", function () {
  const firstNumber = document.querySelector("#firstNumInput").value;
  const secondNumber = document.querySelector("#secondNumInput").value;
  const quotient = Number(firstNumber) / Number(secondNumber);
  checkIfEmpty(firstNumber, secondNumber, quotient);
});

document.querySelector("#clrBtn").addEventListener("click", function () {
  document.querySelector("#firstNumInput").value = null;
  document.querySelector("#secondNumInput").value = null;
  document.querySelector("#result").textContent = "Result: ";
});
