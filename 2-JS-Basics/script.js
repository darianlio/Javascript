//Variables
//var name = 'John';
//console.log(name);
//
//var lastName = 'Smith';
//console.log(lastName);
//
//var age = 26;
//console.log(age);
//
//var fullAge = true;
//console.log(fullAge);

//Variables 2
//var name = 'John';
//var age = 26;
//console.log(name + age);
//console.log(age + age);
//
//var job, isMarried;
//console.log(job);
//
//job = 'teacher';
//isMarried = false;
//console.log(name + " is a " + age + " years old " + job + ". Is he married? " + isMarried);
//
//age = "thiry six";
//job = "driver";
//
//console.log(name + " is a " + age + " years old " + job + ". Is he married? " + isMarried);
//
//var lastName = prompt("What is your last name?");
//console.log(lastName);
//
//alert(name + " is a " + age + " years old " + job + ". Is he married? " + isMarried);

// Operators
var now = 2018;
var birthYear = now - 21;

birthYear = now - 21 * 2;

console.log(birthYear);

var ageJohn = 30;
var ageMark = 30;

ageJohn = ageMark = (3 + 5) * 4 - 6;

ageJohn++;
ageMark *= 2;

console.log(ageJohn);
console.log(ageMark);

// If/else statments
var name = "Darian";
var age = 20;
var isMarried = "no";

if (isMarried === "yes"){
    console.log(name + " is Married");
} else {
    console.log(name + " will hopefully marry soon");
}

isMarried = false;
if(isMarried){
    console.log(name + " is Married");
} else {
    console.log(name + " will hopefully marry soon");
}

//Boolean logic and switch
var age = 25;
if (age < 20){
    console.log("John is a teenager");
} else if (age > 20 && age < 30){
    console.log("John is a young man");
}
else {
    console.log("John is a man");
}

var job = "teacher";

job = prompt("What does John do?");

switch(job){
    case "teacher":
        console.log("John is a teacher");
        break;
    case "driver":
        console.log("John is a driver");
        break;
    case "cop":
        console.log("John helps fight crime");
        break;
    default: 
        console.log("JOhn does something else.");
}