var age = prompt("What is your age?");
if(age  <  0){
	console.log("Error");
}

else if(age == 21){
	console.log("Happy 21st birthday!");
}

if(age % 2 == 0){
	console.log("Your age is odd");
}

if(Math.sqrt(age) == Math.sqrt(age)){
	console.log("Perfect Square!");
}