var todo = [];
var input = prompt("What would you like to do?");

while(input !== "quit"){
	if(input === "list"){
		listTodo();
	} else if (input === "new"){
		addTodo();
	} else if (input === "delete"){
		deleteTodo();
	}
	input = prompt("What would you like to do?");
}
console.log ("OK YOU QUIT THE APP");

function listTodo(){
	todo.forEach(function(todo, i) {
		console.log("***********")
		console.log(i+": " + todo);
		console.log("***********")
	});
}

function addTodo(){
	var newTodo = prompt("Enter new todo");
	todo.push(newTodo);
}

function deleteTodo(){
	var index = prompt("Enter index of todo to delete.");
	todo.splice(index, 1);
	console.log("Deleted Todo");
}