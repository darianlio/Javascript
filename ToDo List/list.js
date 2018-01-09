var todo = [];
var input = prompt("What would you like to do?");

while (input !== "quit"){
	if (input === "new"){
		var newTodo = prompt("Enter new Todo");
		todo.push(newTodo);
	} else if (input === "list") {
		console.log(todo);
	}
	input = prompt("What would you like to do?");
}
console.log("OK, YOU QUIT THE APP!");