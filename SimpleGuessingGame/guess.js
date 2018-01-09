//create secrete number
var secretNumber = 4;
//ask user for guess
var guess = Number(prompt("Guess a number"));
alert(guess);

//check guess
if(guess === secretNumber) {
	alert("YOU GOT IT RIGHT!");
} else if(guess > secretNumber)
	alert("TOO HIGH! GUESS AGAIN!");
} else {
	alert("TOO LOW! GUESS AGAIN!");
}