"use strict"

// Write a JavaScript function to capitalize the first letter of a string.
// console.log(capitalize('js string exercises')); --> "Js string exercises"

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

let firstLetter = getFirstChar(stringArray[0]);
firstLetter.toUpperCase();
let restWordPart = getRest(stringArray[0]);
stringArray[0] = capitalizeWord(firstLetter, restWordPart);

result = stringArray.join(" ");

document.getElementById("content").innerHTML = `${string} --> ${result}`;