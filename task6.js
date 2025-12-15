"use strict"

// Write a JavaScript function to check whether an input is a string or not.
// console.log(is_string('w3resource')); --> true
// console.log(is_string([1, 2, 4, 0])); -->false

function isString(string){
    return typeof string === 'string' ? true : false;
}

const string1 = "w3resource";
const string2 = [1, 2, 4, 0];

let result1 = isString(string1);
let result2 = isString(string2);

document.getElementById("content").innerHTML = `${string1} is ${result1}<br>${string2} is ${result2}`;