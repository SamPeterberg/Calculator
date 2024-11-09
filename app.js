var display = document.getElementById("display");
var Plus = document.getElementById("plus");
var Minus = document.getElementById("minus");
var Multiply = document.getElementById("multiply");
var Divide = document.getElementById("divide");

function plus(param) {
  if (display.value.at(-1) == "+") {
    Plus.Disable;
  } else {
    display.value += param;
  }
}
function minus(param) {
  if (display.value.at(-1) == "-") {
    Minus.Disable;
  } else {
    display.value += param;
  }
}
function multiply(param) {
  if (display.value.at(-1) == "*") {
    Multiply.Disable;
  } else {
    display.value += param;
  }
}
function divide(param) {
  if (display.value.at(-1) == "/") {
    Divide.Disable;
  } else {
    display.value += param;
  }
}
function numb(param) {
  if (display.value.at(-1) == "*") {
    var numb = document.getElementById("number");
    numb.Disable;
  } else {
    display.value += number;
  }
}

function clr() {
  display.value = "";
}

function cal() {
  display.value = eval(display.value);
}
