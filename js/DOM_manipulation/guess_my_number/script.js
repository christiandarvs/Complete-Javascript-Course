"use strict";

// console.log(document.querySelector(".message").textContent);

// document.querySelector(".message").textContent = "Correct Number!";
// document.querySelector(".message").textContent = "Eyyy!";
// document.querySelector(".number").textContent = 13;
// document.querySelector(".score").textContent = 100;

// document.querySelector(".guess").value = 23;
// console.log(document.querySelector(".guess").value);
const guess = document.querySelector(".guess").value;
const attempts = 5;
let score = 20;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  const randomNumber = Math.floor(Math.random() * 20) + 1;

  if (!guess) {
    document.querySelector(".message").textContent = "No Number";
  } else if (guess === randomNumber) {
    document.querySelector(".message").textContent = "Correct Number!";
  } else if (guess > randomNumber) {
    document.querySelector(".message").textContent = "Too High...";
    score--;
    document.querySelector(".score").textContent = score;
  } else if (guess < randomNumber) {
    document.querySelector(".message").textContent = "Too Low...";
    score--;
  }
});

/*
    Document Object Model - a connection point between html documents and javascript code
*/
