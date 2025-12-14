"use strict"

// Acronyms: Create a function that, given a string, 
// returns the string’s acronym (first letter of the word capitalized)

const text = "Create a function that, given a string, returns the string\'s acronym";

let textArr = text.split(" ");
let result = textArr.map(word => word[0]).join("");

document.getElementById("content").innerHTML = `${textArr}<br> ${result}`;