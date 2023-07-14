const output = document.getElementById("output-val");
const history = document.getElementById("history-val");
const numbers = document.getElementsByClassName("number");
for (let i = 0; i < numbers.length; i++) {
  numbers[i].addEventListener("click", function () {
    let digit = this.innerText;
    output.innerText += digit;
  });
}

document.getElementById("clear-entry").addEventListener("click", function () {
  let currentValue = output.innerText;
  if (currentValue) {
    output.innerText = currentValue.slice(0, -1);
  }
});

document.getElementById("=").addEventListener("click", function () {
  let expression = output.innerText;
  if (expression) {
    let result = eval(expression);
    output.innerText = result;
    history.innerText = expression + " =";
  }
});

document.getElementById("/").addEventListener("click", function () {
  let currentValue = output.innerText;
  if (currentValue) {
    output.innerText += "/";
  }
});

document.getElementById("X").addEventListener("click", function () {
  let currentValue = output.innerText;
  if (currentValue) {
    output.innerText += "*";
  }
});

document.getElementById("-").addEventListener("click", function () {
  let currentValue = output.innerText;
  if (currentValue) {
    output.innerText += "-";
  }
});

document.getElementById("+").addEventListener("click", function () {
  let currentValue = output.innerText;
  if (currentValue) {
    output.innerText += "+";
  }
});

document.getElementById("%").addEventListener("click", function () {
  let currentValue = output.innerText;
  if (currentValue) {
    output.innerText += "%";
  }
});

document.getElementById("clear").addEventListener("click", function () {
  output.innerText = "";
  history.innerText = "";
});
