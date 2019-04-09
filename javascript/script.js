let randomNumber = Math.floor(Math.random() * 100) + 1;
const guesses = document.querySelector(".guesses");
const lastResult = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const guessSubmit = document.querySelector("guessSubmit");
const guessField = document.querySelector("guessField");

let guessCount = 1;
let resetButton;

function checkGuess() {
  let userGuess = Number(guessField.value);
  if (guessCount === 1) {
    guessSubmit.textContent = "LastResult";
  }
  guessSubmit.textContent += userGuess + "";

  if (userGuess === randomNumber) {
    lastResult.textContent = "Good Luck";
    lastResult.style.backgroundColor = "green";
    lowOrHi.textContent = "";
    setGameOver();
  } else if (guessCount == 10) {
  }
}
