var arr = [1, 2, 3, 4];
var arr2= [1, 1, 1, 1];

function printReverse(arr){
	for (var i = arr.length - 1; i >= 0; i--){
		console.log(arr[i]);
	}
}

function isUniform(arr){
	var first = arr[0];
	arr.forEach(function(element) {
		if (element !== first){
			return false;
		}
	});
	return true;
}

function sumArray(arr){
	var sum = 0;
	arr.forEach(function(el) {
		sum += el;
	});
	return sum;
}

function max(arr){
	var max = arr[0];
	arr.forEach(function(num) {
		if (max < num){
			max = num;
		}
	})
	return max;
}