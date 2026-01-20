// Math methods

let a = 4.7;
let b = 64;

document.getElementById("math").innerHTML =
    "Math.round(4.7) = " + Math.round(a) + "<br>" +
    "Math.floor(4.7) = " + Math.floor(a) + "<br>" +
    "Math.ceil(4.7) = " + Math.ceil(a) + "<br>" +
    "Math.sqrt(64) = " + Math.sqrt(b) + "<br>";


// String methods

let text = "JavaScript";

document.getElementById("string").innerHTML =
    "text.length = " + text.length + "<br>" +
    "text.toUpperCase() = " + text.toUpperCase() + "<br>" +
    "text.toLowerCase() = " + text.toLowerCase() + "<br>" +
    "text.slice(0,4) = " + text.slice(0, 4) + "<br>";
