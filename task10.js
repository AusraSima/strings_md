"use strict"

// Write a JavaScript function to convert a string in abbreviated form.
// console.log(abbrev_name("Robin Singh")); --> "Robin S."


function abreviateName(string){
    return string.substring(0, 1) + ".";
}

const string = "Robin Singh";

let stringArray = string.split(" ");
stringArray[1] = abreviateName(stringArray[1]);

let result = stringArray.join(" ");

document.getElementById("content").innerHTML = `${string} --> ${result}`;