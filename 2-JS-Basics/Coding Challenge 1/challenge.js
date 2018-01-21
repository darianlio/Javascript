var heightJohn = 40;
var heightFriend = 30;
var ageJohn = 30;
var ageFriend = 32;

var scoreJohn = heightJohn*5 + ageJohn;
var scoreFriend = heightFriend*5 + ageFriend;

if (scoreJohn > scoreFriend){
    console.log("John wins.")
} else if(scoreJohn === scoreFriend){
    console.log("Both win.")
} else{
    console.log("Friend wins");
}