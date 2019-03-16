document.getElementById("content").style.display = "none";
//Start Game on button "Lets Play" click
document.getElementById("start-button").addEventListener("click", startGame);
function startGame() {
    document.getElementById("content").style.display = "block";
}
//Set player name 
//var playerName = prompt("What is your name?");

//linking html ids to js variables
var instructionsText = document.getElementById("instructions-text");
var playerText = document.getElementById("player-text");
var computerText = document.getElementById("computer-text");
var winner = document.getElementById("winner-text")
var resulttext = document.getElementById("results-text");
var playerScore = document.getElementById("playerscore-text");
var computerScore = document.getElementById("computerscore-text");
var tiesScore = document.getElementById("ties-text");

//setting varibales to store win-loss-tie counts
var wins = 0;
var losses = 0;
var ties = 0;

//setting the Computers options to pick from 
var computerOptions = ["Rock", "Paper", "Scissors"];

//Hides the results
// resulttext.textContent = "";
document.getElementById("results-text").style.display = "none";


// This function is run whenever the user presses a key.
document.onkeyup = function (event) {
    playerText.textContent = event.key;

    // Determines which key the player pressed.
    var playerChoice = convertPlayerChoice(event);

    //convert key choice to rock, paper, scissor
    function convertPlayerChoice() {
        if (event.key === "r") {
            playerChoice = "Rock";
        } else if (event.key === "p") {
            playerChoice = "Paper";
        } else if (event.key === "s") {
            playerChoice = "Scissor";
        } else event.key = playerChoice;
    }

    // Randomly chooses a choice from the options array. This is the Computer's choice.
    var computerChoice = computerOptions[Math.floor(Math.random() * computerOptions.length)];

    // This logic determines the outcome of the game (win/loss/tie), and increments the appropriate number
    if ((playerChoice === "Rock") || (playerChoice === "Paper") || (playerChoice === "Scissor")) {

        if ((playerChoice === "Rock" && computerChoice === "Scissors") ||
            (playerChoice === "Scissor" && computerChoice === "Paper") ||
            (playerChoice === "Paper" && computerChoice === "Rock")) {
            wins++;
            playerScore.textContent = wins;
            winner.textContent = "You!"
        } else if (playerChoice === computerChoice) {
            ties++;
            tiesScore.textContent = ties;
            winner.textContent = "Its a tie!"
        } else {
            losses++;
            computerScore.textContent = losses;
        }

        // Hides instructions to the game.
        instructionsText.textContent = "";

        //Displays the results of the game.
        document.getElementById("results-text").style.display = "block";

        //Update the computers choice
        computerText.textContent = computerChoice;

        // pick a random Hal 9000 quote to display when he winns.
    }
}