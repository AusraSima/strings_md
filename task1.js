"use strict"

let text = "Create a function that, given a string, returns all of that string’s contents, but without blanks."

let result = (text) => text.replaceAll(" ", "");

document.getElementById("content").innerHTML = result(text);