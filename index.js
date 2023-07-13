// Get references to the output and history elements
const output = document.getElementById("output-val");
const history = document.getElementById("history-val");

// Add event listeners to the number buttons
const numbers = document.getElementsByClassName("number");
for (let i = 0; i < numbers.length; i++) {
  numbers[i].addEventListener("click", function () {
    let digit = this.innerText;
    output.innerText += digit;
  });
}

// Add event listener to the CE button
document.getElementById("clear-entry").addEventListener("click", function () {
  let currentValue = output.innerText;
  if (currentValue) {
    // Remove the last character from the output
    output.innerText = currentValue.slice(0, -1);
  }
});

// Add event listener to the = button
document.getElementById("=").addEventListener("click", function () {
  let expression = output.innerText;
  if (expression) {
    // Evaluate the expression using eval() function
    let result = eval(expression);
    output.innerText = result;
    history.innerText = expression + " =";
  }
});

// Add event listener to the / (divide) button
document.getElementById("/").addEventListener("click", function () {
  let currentValue = output.innerText;
  if (currentValue) {
    // Append the divide symbol to the output
    output.innerText += "/";
  }
});

// Add event listener to the X (multiply) button
document.getElementById("X").addEventListener("click", function () {
  let currentValue = output.innerText;
  if (currentValue) {
    // Append the multiply symbol to the output
    output.innerText += "*";
  }
});

// Add event listener to the - (subtract) button
document.getElementById("-").addEventListener("click", function () {
  let currentValue = output.innerText;
  if (currentValue) {
    // Append the subtract symbol to the output
    output.innerText += "-";
  }
});

// Add event listener to the + (add) button
document.getElementById("+").addEventListener("click", function () {
  let currentValue = output.innerText;
  if (currentValue) {
    // Append the add symbol to the output
    output.innerText += "+";
  }
});

// Add event listener to the % (percentage) button
document.getElementById("%").addEventListener("click", function () {
  let currentValue = output.innerText;
  if (currentValue) {
    // Append the percentage symbol to the output
    output.innerText += "%";
  }
});

// Add event listener to the C (clear) button
document.getElementById("clear").addEventListener("click", function () {
  output.innerText = "";
  history.innerText = "";
});
