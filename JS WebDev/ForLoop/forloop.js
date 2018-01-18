console.log("Problem 1:");
for(var count = -10; count < 20; count++){
	console.log(count);
	count++;
}
console.log("Problem 2:");
for(var count = 10; count <= 40; count++){
	if (count % 2 === 0){
		console.log(count);
	}
	count++;
}
console.log("Problem 3:");
for(var count = 300; count <= 333; count++){
	if (!(count % 2 === 0)){
		console.log(count);
	}
	count++;
}
console.log("Problem 4:");
for(var count = 5; count <= 50; count++){
	if (count % 5 === 0 && count % 3 === 0){
		console.log(count);
	}
	count++;
}