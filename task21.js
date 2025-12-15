"use strict"

// Write a JavaScript function to truncates a string if it is longer 
// than the specified number of characters. Truncated strings will end 
// with a translatable ellipsis sequence ("…") (by default) or specified 
// characters.
// console.log(text_truncate('We are doing JS string exercises.')) --> "We are doing JS string exercises."
// console.log(text_truncate('We are doing JS string exercises.',19)) --> "We are doing JS ..."
// console.log(text_truncate('We are doing JS string exercises.',15,'!!')) --> "We are doing !!"

function truncateString(string, index) {
    let result;
    switch (index) {
        case 15:
            result = (string.length > index) ? (string.slice(0, index) + "!!") : string;
            break;
        case 19:
            result = (string.length > index) ? string.slice(0, index) + "..." : string;
            break;
    }
    return result;

}

const string = "We are doing JS string exercises.";

let result = truncateString(string, 15);

document.getElementById("content").innerHTML = `${string} --> ${result}`;
