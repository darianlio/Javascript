var p1Button = document.querySelector("#p1");
var p2Button = document.querySelector("#p2");
var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");
var input = document.querySelector("input");
var reset = document.querySelector("#reset");
var scoreDisplay = document.querySelector("#scoreDisplay");
var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var winningScore = 5;

p1Button.addEventListener("click", function(){
	if (!gameOver){
		p1Score++;
		if (p1Score === winningScore){
			gameOver = true;
			p1Display.classList.add("winner");
			p2Display.classList.add("loser");
		}
		p1Display.textContent = p1Score;
	}
});

p2Button.addEventListener("click", function(){
	if (!gameOver){
		p2Score++;
		if (p2Score === winningScore){
			gameOver = true;
			p2Display.classList.add("winner");
			p1Display.classList.add("loser");
		}
		p2Display.textContent = p2Score;
	}	
});

reset.addEventListener("click", function(){
	resetter();
});

input.addEventListener("change", function(){
	scoreDisplay.textContent = input.value;
	winningScore = Number(input.value);
	resetter();
});

function resetter(){
	p1Score = 0;
	p2Score = 0;
	p1Display.textContent = p1Score;
	p2Display.textContent = p2Score;
	p2Display.classList.remove("winner");
	p1Display.classList.remove("loser");
	p1Display.classList.remove("winner");
	p2Display.classList.remove("loser");
	gameOver = false;
}