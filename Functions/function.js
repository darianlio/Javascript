console.log("Problem 1: isEven");
function isEven(num){
	if (num % 2 === 0){
		return true;
	} else {
		return false;
	}
}
isEven(4);	//true
isEven(21);	//false
isEven(68);	//true
isEven(333);//false

console.log("Problem 2: factorial()");
function factorial(num){
	var result = 1;
	for (var i = 2; i <= num; i++){
		result *= i;
	}
	return result;
}

factorial(5);	//120
factorial(2);	//2
factorial(10);	//3628800
factorial(0);	//1;

console.log("Problem 3: kebabToSnake()");

function kebabToSnake(string){
	var newStr = string.replace(/-/g, "_");
	return newStr;
}

kebabToSnake("hello-world"); //hello_world