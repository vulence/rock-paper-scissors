let playerChoice, computerChoice, computerScore = 0, playerScore = 0, result, x, y;
let choices = ["Rock", "Paper", "Scissors"];

x = document.querySelector("#showdia");
y = document.querySelector("#results");

y.innerHTML = "You: " + playerScore + "    Computer: " + computerScore;

function disableButtons() {
	document.querySelector("#rock").disabled = true;
	document.querySelector("#paper").disabled = true;
	document.querySelector("#scissors").disabled = true;
}

function enableButtons() {
	document.querySelector("#rock").disabled = false;
	document.querySelector("#paper").disabled = false;
	document.querySelector("#scissors").disabled = false;
}

function randomSelect() {
	let rnumb = Math.floor(Math.random()*choices.length);
	return choices[rnumb];
}

function checkForWinner() {
	if (playerScore == 5)
	{
		x.innerHTML = "You have won the game!" + "<br>" + "Press the reset button to start a new game!";
		disableButtons();
	}
	else if (computerScore == 5)
	{
		x.innerHTML = "Computer has won the game!" + "<br>" + "Press the reset button to start a new game!";
		disableButtons();
	}
}

function updateScores() {
	y.innerHTML = "You: " + playerScore + "    Computer: " + computerScore;
}

document.querySelector("#reset").onclick = function() {
	playerScore = 0;
	computerScore = 0;
	updateScores();
	enableButtons();
	x.innerHTML = "";
}

document.querySelector("#rock").onclick = function() {
	playerChoice = "Rock";
	computerChoice = randomSelect();

	if (playerChoice == computerChoice)
	{
		x.innerHTML = "You chose: " + playerChoice + ", computer chose the same, it's a tie!";
	}
	else if (computerChoice == "Paper")
	{
		x.innerHTML = "You chose: " + playerChoice + ", computer chose Paper, you lose!";
		computerScore++;
	}
	else
	{
		x.innerHTML = "You chose: " + playerChoice + ", computer chose Scissors, you win!";
		playerScore++;
	}
	
	updateScores();
	checkForWinner();
		
}

document.querySelector("#paper").onclick = function() {
	playerChoice = "Paper";
	computerChoice = randomSelect();
	
	if (playerChoice == computerChoice)
		x.innerHTML = "You chose: " + playerChoice + ", computer chose the same, it's a tie!";
	else if (computerChoice == "Rock")
	{
		x.innerHTML = "You chose: " + playerChoice + ", computer chose Rock, you win!";
		playerScore++;
	}
	else
	{
		x.innerHTML = "You chose: " + playerChoice + ", computer chose Scissors, you lose!";
		computerScore++;
	}
	
	updateScores();
	checkForWinner();
	
}

document.querySelector("#scissors").onclick = function() {
	playerChoice = "Scissors";
	computerChoice = randomSelect();
	
	if (playerChoice == computerChoice)
		x.innerHTML = "You chose: " + playerChoice + ", computer chose the same, it's a tie!";
	else if (computerChoice == "Rock")
	{
		x.innerHTML = "You chose: " + playerChoice + ", computer chose Rock, you lose!";
		computerScore++;
	}
	else
	{
		x.innerHTML = "You chose: " + playerChoice + ", computer chose Paper, you win!";
		playerScore++;
	}
	
	updateScores();
	checkForWinner();
	
}