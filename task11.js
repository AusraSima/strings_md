"use strict"

// Write a JavaScript function to hide email addresses to protect 
// from unauthorized user.
// -console.log(protect_email("robin_singh@example.com")); --> "robin...@example.com"

function findSymbol(string, symbol){
    return string.indexOf(symbol);
}

function getSubstring(string, index1, index2){
    return string.substring(index1, index2);
}

function protectEmail(string, substringToBeReplaced){
    return string.replace(substringToBeReplaced, "...");
}

const string = "robin_singh@example.com";

let index1 = findSymbol(string, "_");
let index2 = findSymbol(string, "@");
let part = getSubstring(string, index1, index2);
let result = protectEmail(string, part);

document.getElementById("content").innerHTML = `${string} --> ${result}`;