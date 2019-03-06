var player_1 = document.getElementById("p1");
var player_2 = document.getElementById("p2");
var reset_button = document.getElementById("res");
var p1_score = 0;
var p2_score = 0;
var end_score = 5; // default end score
var user_endscore = 0;
var game_over = false;

var p1_display = document.getElementById("p1score");
var p2_display = document.getElementById("p2score");
var end_score_display = document.getElementById("end");

p1_display.textContent = p1_score;
p2_display.textContent = p2_score;
end_score_display.textContent = end_score;

if(player_1){
	player_1.addEventListener("click", function(){
		if(!game_over){
			p1_score = p1_score+1;
			p1_display.textContent = p1_score;
			console.log("p1 score is" + p1_score);
			check(p1_score);
		}
	
})

}

if(player_2){
	player_2.addEventListener("click", function(){
		if(!game_over){
			p2_score = p2_score+1;
			p2_display.textContent = p2_score;
			console.log("p2 score is" + p2_score);
			check(p2_score);
		}
	
})
}


if(reset_button){
	reset_button.addEventListener("click", function(){
	
	user_endscore = document.getElementById("num");
	end_score = user_endscore.value;
	if(end_score >0){
		end_score_display.textContent = end_score;
		p1_score = 0;
		p2_score = 0;
		p1_display.textContent = p1_score;
		p2_display.textContent = p2_score;
		game_over = false;
	} else {
		game_over = true;
		alert("choose a positive score first");
	}

})

}

function check(score){
	if(score == end_score){
		console.log("End Game");
		game_over = true;
	}
}

