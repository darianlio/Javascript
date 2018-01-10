//DOM Basics
//Get Elements HTML Style
var tag = document.getElementById("highlight");
console.dir(tag);
tag = document.getElementByClassName("bolded");
console.log(tag[0]);
tag = document.getElementByTagName("li");
console.log(tag[0]);

//Query Selector CSS-Style
tag = document.querySelector("#highlight"); //returns first element called #highlight
tag = document.querySelectorAll("h1"); //returns all elements called h1

//Manipulators
//Styles
tag.style.color ="blue"
tag.style.border ="blue"

//Toggles
tag.classList.add("class");
tag.classList.remove("class");
tag.classList.toggle("class");

//textContent
tag.textContent //retrieve text content
tag.textContent ="blah blah" //alter text content

//innerHTML
tag.innerHTML //returns string with all HTML content

