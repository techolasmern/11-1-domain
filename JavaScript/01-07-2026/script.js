// DOM => DOM (Document Object Model) in JavaScript is a programming interface
// that represents an HTML document as a tree of objects. It allows
// JavaScript to access, modify, add, or delete HTML elements and CSS styles
// dynamically.

// document.writeln("<h2>Hello World</h2>");
// DOM - Methods

// getElementById() => Return the element with the specified id.
const element = document.getElementById("paragraph");
console.log(element.innerText);
console.log(element.innerHTML);

element.innerHTML = "<i>Hello World</i>";




