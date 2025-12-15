"use strict"

// Write a JavaScript function to extract a specified number of 
// characters from a string.
// console.log(truncate_string("Robin Singh",4)); --> "Robi"


function truncateString(string){
    return string.substring(0, 4);
}

const string = "Robin Singh";

let result = truncateString(string);

document.getElementById("content").innerHTML = `${string} --> ${result}`;