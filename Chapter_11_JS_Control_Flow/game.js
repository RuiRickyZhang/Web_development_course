var secretNumber = 4;
var guess = Number(prompt("Guess a number"));

while(guess != secretNumber){

	if(guess > secretNumber){
	alert("Too high! Guess again");
	}

	else{
		alert("Too low! Guess again");
	}

	guess = Number(prompt("Guess another number"));

}

alert("You got it right!");


