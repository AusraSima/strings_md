"use strict"

// Write a JavaScript function to parameterize a string.
// console.log(string_parameterize("Robin Singh from USA.")); --> 
// "robin-singh-from-usa"

function makeArray(string){
    return string.split(" ");
}

function parametrizeString(array){
    return array.join("-");
}

const string = "Robin Singh from USA.";



let stringArray = makeArray(string);

let result = parametrizeString(stringArray);

document.getElementById("content").innerHTML = `${string} --> ${result.toLowerCase()}`;