// App that creates a random password for a given size
const { groupEnd } = require("console");
const { rand } = require("elliptic");
const prompt = require("prompt-sync")();

const passwordSize = prompt("Password size: ");

// loops through list and randomly selects item

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

  // Infinite loop that runs a random generator for a password
  // if the password includes "@" and "!" then the while loop
  // breaks and returns the result

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

// This function is run when the "Get Password" button is
// clicked and runs a verification to check is size is a
// number and if it is greater than 4 and less that 21 if it
// is the size is accepted and youbreak out of the loop after
// printing out on the webpage the password

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
      // New Lines
      let y = myUpper(result);
      let newPass = rebuildPassword(result, y);
      // New Lines
      let password = document.querySelector("p");
      password.style = "color:rgb(38, 39, 72); font-size:1.25em";
      // was result
      password.innerHTML = newPass;
      break;
    }
  }
}

// clears the password off the webpage

function reset() {
  let clear = document.querySelector("p");
  clear.innerHTML = "";
  blank();
}

// clears the number in the input box to a blank box

function blank() {
  document.getElementById("size").value = "";
}

// function returns a single uppercase letter from the password
function myUpper(num) {
  for (let i = 0; i < num.length; i++) {
    if (num[i] != "@" && num[i] != "!" && num[i] != Number(num[i])) {
      let myUpper = num[i].toUpperCase();
      return myUpper;
    }
  }
}

// function return the password rebuilt with an uppercase letter
function rebuildPassword(result, y) {
  let z = result.slice(1);
  let newPass = z + y;
  return newPass;
}
