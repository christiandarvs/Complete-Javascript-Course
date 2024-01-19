"use strict";

// console.log(document.querySelector(".message").textContent);

// document.querySelector(".message").textContent = "Correct Number!";
// document.querySelector(".message").textContent = "Eyyy!";
// document.querySelector(".number").textContent = 13;
// document.querySelector(".score").textContent = 100;

// document.querySelector(".guess").value = 23;
// console.log(document.querySelector(".guess").value);
const guess = document.querySelector(".guess").value;

document.querySelector(".check").addEventListener("click", function () {
  console.log(
    `The user entered the number: ${document.querySelector(".guess").value}`
  );
});

/*
    Document Object Model - a connection point between html documents and javascript code
*/
