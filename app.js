var Display = document.getElementById("display");

function display(value) {
  Display.value += value;
}

function displayoperator(operator) {
    if (Display.value == "") {
    displayoperator()=disable
  }
 else if (Display.value.at(-1)=="+" || Display.value.at(-1)=="-" || Display.value.at(-1)=="*" || Display.value.at(-1)=="/" || Display.value.at(-1)=="%") {
    Display.value = Display.value.slice(0,  -1) + operator;
  } else {
    Display.value += operator;
  }
}

function displayclear() {
  Display.value = "";
}

function del() {
  Display.value = Display.value.slice(0, -1);
}

function calculate() {
  if (Display.value == "") {
    calculate()=disable
  }
  try {
    Display.value = eval(Display.value);
  } catch {
    Display.value = "syntax error";
  }
}


