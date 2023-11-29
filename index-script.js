// playGame();

const narratorText = document.querySelector("#narrator");

const playerButtons = document.querySelector("#player-choose");
playerButtons.addEventListener("mousedown", playRound)

const playerDisplay = document.querySelector("#player-choice");
const computerDisplay = document.querySelector("#cpu-choice");

const playerScore = document.querySelector("#player-score");
const computerScore = document.querySelector("#cpu-score");

const restartButton = document.querySelector("#restart");
restartButton.addEventListener("mousedown", resetDoc);

function playRound() {
    getResult();
    checkWin();
}

function resetDoc() {
    playerDisplay.innerHTML = "?";
    computerDisplay.innerHTML = "?";

    playerScore.innerHTML = "0";
    computerScore.innerHTML = "0";

    narratorText.innerHTML = "First to score five points wins!";
    playerButtons.style["pointer-events"] = "all";
}

function checkWin() {
    if( playerScore.innerHTML=="5" ) {
        narratorText.innerHTML = "Player has won!";
        playerButtons.style["pointer-events"] = "none";
    } else if( computerScore.innerHTML=="5" ) {
        narratorText.innerHTML = "CPU has won!";
        playerButtons.style["pointer-events"] = "none";
    }
}

function getEmoji(name) {
    switch(name) {
        case "rock":
            return "🪨";
        case "paper":
            return "📄";
        case "scissors":
            return "✂️";
        case "lizard":
            return "🦎";
        case "spock":
            return "🖖🏻";
        default:
            return "ERROR";
    }
}

function updateScores(result, playerChoice, computerChoice){
    switch(result) {
        case "win":
            playerScore.innerHTML = (+(playerScore.innerHTML) + 1).toString();
            narratorText.innerHTML = `${firstCapital(playerChoice)} beats ${firstCapital(computerChoice)}. Player wins!`;
            break;
        case "loss":
            computerScore.innerHTML = (+(computerScore.innerHTML) + 1).toString();
            narratorText.innerHTML = `${firstCapital(computerChoice)} beats ${firstCapital(playerChoice)}. CPU wins!`;
            break;
        case "draw":
            narratorText.innerHTML = `It's a draw!`;
            break;
        default:
            break;
    }
}

function firstCapital(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function getPlayerChoice() {
    let choice = event.target.id;
    if(choice=="player-choose") {return "ERROR";}
    playerDisplay.innerHTML = getEmoji(choice);

    // alert(`Player choice is ${choice}.`);

    return choice;
}

function getComputerChoice() {
    let choice = Math.floor(Math.random()*5 + 1);

    switch(choice) {
        case 1:
            choice = "rock";
            break;
        case 2:
            choice = "paper";
            break;
        case 3:
            choice = "scissors";
            break;
        case 4:
            choice = "lizard";
            break;
        case 5:
            choice = "spock";
            break;
        default:
            choice = "null";
            break;
    }

    computerDisplay.innerHTML = getEmoji(choice);

    if(choice == "null") { confirm("ERROR! CPU choice is null"); }

    // alert(`Computer choice is ${choice}.`);

    return choice;
}

function getResult() {
    let playerChoice = getPlayerChoice();
    if(playerChoice=="ERROR") {return;}
    let computerChoice = getComputerChoice();

    let losesTo = {
        "rock" : ["paper","spock"],
        "paper" : ["scissors","lizard"],
        "scissors" : ["rock","spock"],
        "lizard" : ["rock","scissors"],
        "spock" : ["paper","lizard"],
    }

    let result="";

    if( playerChoice == computerChoice ) {
        result = "draw";
    } else if( (losesTo[computerChoice]).includes(playerChoice) ) {
        result = "win";
    } else {
        result = "loss";
    }

    // alert(`The result is a ${result}.`);

    updateScores(result, playerChoice, computerChoice);
}