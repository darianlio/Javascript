var movieArr = [
	{
		title: "Avengers",
		rating: 5,
		hasWatched: true
	},
	{
		title: "Boogieman",
		rating: 5,
		hasWatched: false
	},
	{
		title: "Wonderwoman",
		rating: 5,
		hasWatched: true
	}
];

movieArr.forEach(function(element) {
	if(element.hasWatched){
		console.log("You have watched " + "\"" + element.title + "\"" +  " - " + element.rating + " stars");
	} else {
		console.log("You have not seen " + "\"" + element.title + "\"" +  " - " + element.rating + " stars");	
	}
});