"use strict"

// Write a JavaScript function to humanize number.
// Formats a number to a human-readable string, with the correct suffix such as 1st, 2nd, 3rd or 4th.

// console.log(humanize_format());
// console.log(humanize_format(1)); --> "1st"
// console.log(humanize_format(8)); --> "8th"
// console.log(humanize_format(301)); --> "301st"
// console.log(humanize_format(402)); --> "402nd"

function humanizeNumber(number) {
    let res;
    switch (number % 10){
        case null: res = null;
        break;
        case 1: res = number + "st"; break;
        case 2: res = number + "nd"; break;
        case 3: res = number + "rd"; break;
        default: res = number + "th"; break;
    }
    return res;
}

const num =  402;

let result = humanizeNumber(num);

document.getElementById("content").innerHTML = `${num} --> ${result}`;
