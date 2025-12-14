"use strict"

// Count Non-Spaces: Create a function that, given a string, 
// returns the number of non-space characters found in the string.

let text = "Create a function that, given a string, returns the number of non-space characters found in the string."

let result = (text) => text.replaceAll(" ", "").length;

document.getElementById("content").innerHTML = result(text);