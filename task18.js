"use strict"

// Write a JavaScript function to concatenates a given 
// string n times (default is 1).
// Test Data :
// console.log(repeat('Ha!')); --> "Ha!"
// console.log(repeat('Ha!',2)); --> "Ha!Ha!"
// console.log(repeat('Ha!',3)); -->"Ha!Ha!Ha!"

function concatString(string, n) {
    let text = "";
    for (let i = 1; i <= n; i++){
        text += string;
    }
    return text;
}

const string = "Ha!";
const n = 3;

let result = concatString(string, n);

document.getElementById("content").innerHTML = `${string} --> ${result}`;