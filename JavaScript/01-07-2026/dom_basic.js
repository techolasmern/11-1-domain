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

element.style.backgroundColor = "red";
element.style.padding = "30px";
element.style.color = "#ffffff";

element.innerHTML = "<i>Hello World</i>";

// getElementsByClassName() => Return the elements with the specified class name.
const elements = document.getElementsByClassName("demo");
console.log(elements[0].innerText);
for (let i = 0; i < elements.length; i++){
    elements[i].innerHTML = "<i><u>Hello World</i>";
    elements[i].style.color = "green";
    elements[i].style.fontSize = "20px";
    elements[i].style.fontFamily = "JetBrains Mono";
}

// getElementsByTagName() => Return the elements with the specified tag name.
const tags = document.getElementsByTagName("p");
console.log(tags[0].innerText);

// querySelector() => Return the first element that matches the specified selector.
const query = document.querySelector("#paragraph"); // same as getElementById()
console.log(query);

// querySelectorAll() => Return all elements that match the specified selector.
const queryAll = document.querySelectorAll("#paragraph");
console.log(queryAll[2]);


