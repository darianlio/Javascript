//addEventListener
element.addEventListener(type, functionToCall);

//example
var button = document.querySelector("button");
button.addEventListener("click", function(){
	console.log("someone clicked the button");
});