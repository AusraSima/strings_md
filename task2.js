"use strict"

// Get Digits: Create a function that given a string, returns the integer made from the strings digits.

const string = "12 cats, 11 rabits and 10 dogs.";

let result = (string) => string.match(/\d/g).join("");
// paaiskinimai:  \d - atitinka bet kuri skaiciu [0-9}]
//                /.../ - zymi regex-a
//                 g - reiskia, kad ieskoma globaliai, visi atitikimai, ne tik pirmas.

document.getElementById("content").innerHTML = Number(result(string));