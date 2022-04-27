// App that creates a random password for a given size
const { rand } = require("elliptic");
const prompt = require("prompt-sync")();

// loops through list and randomly selects item
const passwordSize = prompt("Password size: ");
function generator(passwordSize) {
  const char = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "k",
    "j",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    0,
    "@",
    "!",
  ];

  let twoUpper = "";
  let twoUpper2 = "";

  while (true) {
    let result = "";
    for (let i = 0; i < passwordSize; i++) {
      item = Math.floor(Math.random() * 38);
      result += char[item];
    }
    if (result.includes("@") && result.includes("!")) {
      return result;
    }
  }
}

function getPassword() {
  let size = document.getElementById("size").value;
  while (true) {
    if (size != parseInt(size)) {
      let error1 = document.querySelector("p");
      error1.style = "color:darkred; font-size:1.25em";
      error1.innerHTML = "Must enter a number between 5 and 20";
      break;
    } else if (size < 5 || size > 20) {
      let error = document.querySelector("p");
      error.style = "color:darkred; font-size:1.25em";
      error.innerHTML =
        "Wrong value must be greater than 4 and less than 21...";

      break;
    } else {
      let result = generator(size);
      let password = document.querySelector("p");
      password.style = "color:rgb(38, 39, 72); font-size:1.25em";
      password.innerHTML = result;
      break;
    }
  }
}

function reset() {
  let clear = document.querySelector("p");
  clear.innerHTML = "";
  blank();
}

function blank() {
  document.getElementById("size").value = "";
}
