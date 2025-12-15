"use strict"

// Write a JavaScript function to check whether a string is blank or not.
// console.log(is_Blank('')); // true
// console.log(is_Blank('abc')); // false

function isBlank(string){
    return string === "" ? true : false;
}

const string1 = "";
const string2 = "abc";

let result1 = isBlank(string1);
let result2 = isBlank(string2);

document.getElementById("content").innerHTML = `${string1} is ${result1}<br>
${string2} is ${result2}`;