"use strict"

// Write a JavaScript function to split a string and convert it into 
// an array of words.
// console.log(string_to_array("Robin Singh")); --> ["Robin", "Singh"]

function makeArray(string){
    return string.split(" ");
}

const string = "Robin Singh";

let wordArray = makeArray(string);

document.getElementById("content").innerHTML = `${string} --> ${wordArray}`;