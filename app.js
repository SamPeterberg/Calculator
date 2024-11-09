var display = document.getElementById("display");

function numb(param) {
  if (display.value.at(-1) == "*") {
    var numb = document.getElementById("number");
    numb.Disable;
  } else {
    display.value += param;
  }
}

function clr() {
  display.value = "";
}

function cal() {
  display.value = eval(display.value);
}
