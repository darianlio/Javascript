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
