"use strict"

// Write a JavaScript function that takes a string which has 
// lower and upper case letters as a parameter and converts upper case 
// letters to lower case, and lower case letters to upper case.
// console.log(swapcase('')); --> "aAbBC"

function makeArray(string) {
    return string.split("");
}

function changeCase(character) {
    let result = character == character.toUpperCase() ? character.toLowerCase() : character.toUpperCase();
    return result;
}

const string = "AaBbc";

let result = "";
let stringArray = makeArray(string);

for (let i = 0; i < stringArray.length; i++) {
        stringArray[i] = changeCase(stringArray[i]);
} 

result = stringArray.join("");

document.getElementById("content").innerHTML = `${string} --> ${result}`;