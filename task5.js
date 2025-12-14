"use strict"

// Remove Shorter Strings: Create a function that, given an array of strings and a numerical value, 
// returns an array that only contains strings longer than or equal to the given value.

let text = "Create a function that, given a string, returns the number of non-space characters found in the string."
let number = 7;

let textArr = text.split(" ");
let result = textArr.filter(arrayElement => arrayElement.length > number);

document.getElementById("content").innerHTML = result;