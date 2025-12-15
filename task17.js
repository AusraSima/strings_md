"use strict"

// Write a JavaScript function to uncamelize a string.
// console.log(uncamelize('helloWorld')); --> "hello world"
// console.log(uncamelize('helloWorld','-')); --> "hello-world"
// console.log(uncamelize('helloWorld','_')); -->"hello_world"

function makeArray(string) {
    return string.split(" ");
}

const string = "jsStringExercises";

let result1 = string.split(/(?=[A-Z])/).join(" ");
let result2 = string.split(/(?=[A-Z])/).join("-");
let result3 = string.split(/(?=[A-Z])/).join("_");

document.getElementById("content").innerHTML = `${string} --> ${result1} --> ${result2} --> ${result3}`;