"use strict";
// var colVal = "#ff0000";
const body = document.querySelector("body");
const input1 = document.querySelector(".input1");
const input2 = document.querySelector(".input2");
const button = document.querySelector(".button-76");
const container = document.querySelector(".container");
const css = document.getElementById("css");

// loads original colors at beggining load and sets button to same value
function loadColors() {
  body.style.background = `linear-gradient(to right, ${input1.value}, ${input2.value})`;
  button.style.background = `linear-gradient(to right, ${input1.value}, ${input2.value})`;
}
loadColors();

// returns the css color string as an rgb value
function cssColor() {
  css.textContent = `${body.style.background};`;
}
cssColor();

// sets the background colors on input event
function setGradient() {
  loadColors();
  cssColor();
}

// generates random colors for button and background
function generateColor() {
  let randomNum = () => Math.round(Math.random() * 255);
  button.style.background =
    body.style.background = `linear-gradient(to right, rgb(${randomNum()},${randomNum()},${randomNum()}), rgb(${randomNum()},${randomNum()},${randomNum()}))`;
  cssColor();
}

container.addEventListener("input", setGradient);
button.addEventListener("click", generateColor);
// "linear-gradient(to right," + input1.value.toString() + "," + input2.value.toString() + ")";
// `linear-gradient(to right, ${input1.value}, ${input2.value})`;
