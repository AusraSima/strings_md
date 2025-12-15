"use strict"

// Write a JavaScript function to capitalize the first 
// letter of each word in a string.
// -console.log(capitalize_Words('js string exercises'));
//  --> "Js String Exercises"

function makeArray(string) {
    return string.split(" ");
}

function getFirstChar(word) {
    return word.charAt(0).toUpperCase();
}

function getRest(word) {
    return word.substring(1);
}

function capitalizeWord(firstLetter, restPart) {
    return firstLetter + restPart;
}

const string = "js string exercises";

let result = "";
let stringArray = makeArray(string);
for (let i = 0; i < stringArray.length; i++) {
    let firstLetter = getFirstChar(stringArray[i]);
    firstLetter.toUpperCase();
    let restWordPart = getRest(stringArray[i]);
    stringArray[i] = capitalizeWord(firstLetter, restWordPart);
}  
result = stringArray.join(" ");

document.getElementById("content").innerHTML = `${string} --> ${result}`;