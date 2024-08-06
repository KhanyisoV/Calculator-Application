/** @format */
//Changed the script name from script to function, script was not working💪🏿
// calculator program code

const display = document.getElementById("display");

function appendToDisplay(input) {
  display.value += input;
}

function clearDisplay() {
  display.value = "";
}

function calculate() {
  try {
    display.value = eval(display.value); // Ahh you watch Bro Code too bro ? 😌
  } catch (error) {
    display.value = "Error";
  }
}
