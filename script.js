let curr_fig = document.querySelector("#curr_fig");
let equation = document.querySelector("#equation");

function calculate() {
  eq = curr_fig.textContent.split(" ");
  console.log();

  if (eq.length != 3) {
    return Number(eq[0]);
  }

  equation.textContent = curr_fig.textContent;

  if (eq[1] === "+") {
    return Number(eq[0]) + Number(eq[2]);
  } else if (eq[1] === "-") {
    return Number(eq[0]) - Number(eq[2]);
  } else if (eq[1] === "*") {
    return Number(eq[0]) * Number(eq[2]);
  } else if (eq[1] === "/") {
    return Number(eq[0]) / Number(eq[2]);
  }
}

function display(input) {
  if (input === "Clear") {
    curr_fig.textContent = "";
    equation.textContent = "";
  } else if (input === "Delete") {
    curr_fig.textContent = curr_fig.textContent.slice(0, -1);
  } else if (
    input === "=" ||
    input === "+" ||
    input === "-" ||
    input === "*" ||
    input === "/"
  ) {
    curr_fig.textContent = calculate();
    if (input !== "=") {
      curr_fig.textContent += ` ${input} `;
    }
  } else if (curr_fig.textContent.length <= 15) {
    curr_fig.textContent += input;
  }
}

let numbers = document.querySelectorAll(".num");
let operations = document.querySelectorAll(".ope");
let specials = document.querySelectorAll(".spe");

let nums = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

let clear = document.querySelector(".tr");
let delet = document.querySelector(".tl");

clear.addEventListener("click", function (event) {
  display(event.target.textContent);
});

delet.addEventListener("click", function (event) {
  display(event.target.textContent);
});

Array.from(numbers).forEach(function (number) {
  number.addEventListener("click", function (event) {
    display(event.target.textContent);
  });
});

Array.from(operations).forEach(function (operation) {
  operation.addEventListener("click", function (event) {
    display(event.target.textContent);
  });
});

Array.from(specials).forEach(function (special) {
  special.addEventListener("click", function (event) {
    display(event.target.textContent);
  });
});

document.addEventListener("keydown", function (event) {
  if (
    nums.includes(event.key) ||
    event.key === "=" ||
    event.key === "+" ||
    event.key === "-" ||
    event.key === "*" ||
    event.key === "/" ||
    event.key === "."
  ) {
    display(event.key);
  } else if (event.key === "Enter") {
    display("=");
  } else if (event.key.toLowerCase() === "c") {
    display("Clear");
  } else if (event.key.toLowerCase() === "d" || event.key === "Backspace") {
    display("Delete");
  }
});
