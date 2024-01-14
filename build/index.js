"use strict";

var display = document.getElementById("display");

function appendToDisplay(input) {
  display.value += input;
}

function deleteOneNumber() {
  display.value = display.value.toString().slice(0, -1);
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
}
function clearDisplay() {
  display.value = "";
}
