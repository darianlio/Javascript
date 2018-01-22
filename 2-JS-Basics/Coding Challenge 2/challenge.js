var yearOfBirth = [1990, 1991, 1992, 1993];
var arr = [];

for (var i = 0; i < yearOfBirth.length; i++) {
    var age = 2018 - yearOfBirth[i];
    arr.push(age);
}

for (var i = 0; i < arr.length; i++){
    if (arr[i] >= 18){
        console.log(arr[i]);
    }
}

function printFullAge(yearOfBirth) {
    var arr = [];
    var fullAge = [];
    for (var i = 0; i < yearOfBirth.length; i++) {
        var age = 2018 - yearOfBirth[i];
        arr.push(age);
    }
    for (var i = 0; i < arr.length; i++){
        if (arr[i] >= 18){
            fullAge.push(true);
        } else {
            fullAge.push(false);
        }
    }
    return fullAge;
}

var full_1 = printFullAge(yearOfBirth);
var full_2 = printFullAge(yearOfBirth);