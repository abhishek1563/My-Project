var players,currentScore,score,dice,activePlayer;
players=[0,0];
currentScore=0;
score=[0,0];
activePlayer=0;

function Generate()
{
	//generate dice number
	
	dice=Math.ceil(Math.random()*6);
document.querySelector('#Dice-score').value=dice;
//check if dice no is 1 then make another player as active player and also update the current score
if(dice!== 1){
	currentScore+=dice;
}
else {
currentScore=0;
if(activePlayer===1){
		activePlayer=0
		//document.getElementById('player-1').classList.remove('active');
		//document.getElementById('player-0').classList.add('active');
		toggleScreen();
	}
	else
	{
		activePlayer=1;
		//document.getElementById('player-0').classList.remove('active');
		//document.getElementById('player-1').classList.add('active');
		toggleScreen();
	}
}
document.querySelector('#current-sore').value=currentScore;

}
function saveScore()
{
	//if press hold the score is saved in global score and the dice score and current score are set to 0, Also the chance is given to next player.
	score[activePlayer]+=currentScore
	document.querySelector('#score-' + activePlayer).value=score[activePlayer];
	currentScore=0;
	document.querySelector('#current-sore').value=0;
	document.querySelector('#Dice-score').value=0;
	checkWinner();
	if(activePlayer===1){
		activePlayer=0;
		
	}
	else
		activePlayer=1;
		toggleScreen();
}
	
function toggleScreen()
{
	//to pass the chances to one another.
	document.getElementById('player-0').classList.toggle('active');
	document.getElementById('player-1').classList.toggle('active');
}
function checkWinner()
{
	// if reaches 100, check who is the winner and hide the generate button so that match can be stopped.
	if(score[0]>=100 || score[1]>=100)
	{
		var x=document.getElementsByTagName('button');
		x[0].style.display='none';
		x[1].style.display='none';
		if(score[0]>=100)
		{
			var x= document.createElement('h1');
			var t= document.createTextNode("Player 1 Won  !!!");
			x.appendChild(t);
			document.getElementById('winner').appendChild(x);
			document.getElementById('player-0').style.backgroundColor='Green';
			document.getElementById('player-1').style.backgroundColor='Red';
			
		}
		else{
			var x= document.createElement('h1');
			var t= document.createTextNode("Player 2 Won  !!!");
			x.appendChild(t);
			document.getElementById('winner').appendChild(x);
			document.getElementById('player-1').style.backgroundColor='Green';
			document.getElementById('player-0').style.backgroundColor='Red';
		}
		currentScore=0;
	}
	
}
