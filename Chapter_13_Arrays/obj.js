movies = [
	{
		name: "Frozen",
		hasWatched: true;
	}

	{
		name: "Big Apple",
		hasWatched: false;
	}
]

movies.forEach(function(movie){
	ans = "You have ";
	if(hasWatched){
		console.log(ans + "watched \"" + movie.name + "\"");
	}
	else{
		console.log(ans + "not watched \"" + movie.name + "\"");
	}
})