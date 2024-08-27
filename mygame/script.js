// Logic to get Computer Choice
function getComputerChoice(){
	const randomNumber = Math.random() * 3;

	if (randomNumber <= 1) {
		return "rock";
	}
	else if (randomNumber <= 2) {
		return "paper";
	}
	else {
		return "scissors";
	}
}

// Logic to get Human Choice
function getHumanChoice(){
	let userInput = prompt("Choose one: Rock(R) Paper(P) Scissors(S)");
	
	userInput = userInput.toUpperCase();

	if (userInput === "R" || userInput === "ROCK"){
		return "rock";
	}
	else if (userInput === "P" || userInput === "PAPER"){
		return "paper";
	}
	else if (userInput === "S" || userInput === "SCISSORS"){
		return "scissors";
	}
	else {
		alert("Please Enter Rock, Paper or Scissors");
		return getHumanChoice();
	}
}

// Players Score variables
let computerScore = 0;
let humanScore = 0;

// Logic to play a single round
function playRound(computerChoice, humanChoice){
	// Logic to follow:
	// Rock beats Scissors
	// Paper beats Rock
	// Scissors beats Paper
	if (	(humanChoice === "rock" && computerChoice === "scissors") ||
		(humanChoice === "paper" && computerChoice === "rock") ||
		(humanChoice === "scissors" && computerChoice === "paper")
	){
		console.log(`You Win!!! ${humanChoice} beats ${computerChoice}`);
		humanScore++;
	}
	else if (humanChoice === computerChoice){
		console.log("It's a draw");
	}
	else {
		console.log(`You Lose!!! ${humanChoice} cannot beat ${computerChoice}`);
		computerScore++;
	}
}

// Logic to play entire game
function playGame(){
	for (let round = 0;round < 5; round++){
		const humanChoice = getHumanChoice();
		const computerChoice = getComputerChoice();

		// Override console.log
		console.log = function (message) {
		    const output = document.getElementById('console-output');
		    output.innerHTML += `<p>${message.toUpperCase()}</p>`;
		    output.scrollTop = output.scrollHeight; // Auto-scroll to the bottom
		};

		console.log("$$$");
		console.log(`Round ${round + 1}:`);
		console.log(`You -> ${humanChoice}`);
		console.log(`Computer -> ${computerChoice}`);
		console.log("$$$");
		playRound(computerChoice, humanChoice);
	}
	console.log("$$$");
	if (humanScore > computerScore){
		alert("Congratulations!!! You won the game");
		console.log(`Great Job! You won (${humanScore} - ${computerScore})`);
	}
	else if (computerScore > humanScore){
		alert("You Died!!! Better Luck next Time");
		console.log(`You lost (${humanScore} - ${computerScore})`);
	}
	else {
		alert("It's a Draw. Try Again");
		console.log("It's a Draw. Try Again");
	}

	// initialize to Restart the entire game
	startGame.textContent = "Restart";
	computerScore = humanScore = 0;
}

// Adjust the button(Start Game, Restart) to start the Game on-click
const startGame = document.querySelector("#playGame");
startGame.addEventListener("click", playGame);