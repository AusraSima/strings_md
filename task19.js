"use strict";

// Write a JavaScript function to insert a string within a string
// at a particular position (default is 1).
// console.log(insert('We are doing some exercises.')); --> "We are doing some exercises."
// console.log(insert('We are doing some exercises.','JavaScript ')); --> "JavaScript We are doing some exercises."
// console.log(insert('We are doing some exercises.','JavaScript ',18)); --> "We are doing some JavaScript exercises."

// unfinished, wrong outcome

function makeArray(string) {
  return string.split("");
}

const string = "We are doing some exercises.";
const insert = "JavaScript ";
const index = 18;

let stringArray = makeArray(string);

let result1 = (stringArray) => {stringArray.splice(index, 0, insert);
    let resultingArr = stringArray.join(""); return resultingArr};


document.getElementById(
  "content"
).innerHTML = `${string} --> ${result1(stringArray)}`;
