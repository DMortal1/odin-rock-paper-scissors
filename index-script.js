playGame();

function getPlayerChoice() {
    let choice = prompt("Type Rock, Paper or Scissors","rock").toLowerCase();

    switch(choice) {
        case "rock": case "rocks":
            choice = "Rock";
            break;
        case "paper": case "papers":
            choice = "Paper";
            break;
        case "scissor": case "scissors":
            choice = "Scissors";
            break;
        default:
            choice = "null";
    }

    if(choice != "null") {
        confirm(`You have chosen ${choice}.`);
    } else {
        confirm("Please type one of the three mentioned choices!");
    }

    return choice;
}

function getComputerChoice() {
    let choice = Math.floor(Math.random()*3 + 1);
    
    switch(choice) {
        case 1:
            choice = "Rock";
            break;
        case 2:
            choice = "Paper";
            break;
        case 3:
            choice = "Scissors";
            break;
        default:
            choice = "null";
            break;
    }

    if(choice != "null") {
        confirm(`CPU has chosen ${choice}.`);
    } else {
        confirm("ERROR! CPU choice is null");
    }

    return choice;
}

function getResult() {
    let playerChoice = getPlayerChoice();
    if(playerChoice == "null") {return;}
    let computerChoice = getComputerChoice();

    let losesTo = {
        "Rock" : "Paper",
        "Paper" : "Scissors",
        "Scissors" : "Rock"
    }

    let result;

    if(playerChoice == computerChoice) {
        result = "draw";
    } else if(playerChoice == losesTo[computerChoice]) {
        result = "win";
    } else {
        result = "loss";
    }

    confirm(`The result is a ${result}.`);

    return result;
}

function playRound(scores) {
    let result = getResult();
    switch(result) {
        case "draw": break;
        case "win": ++scores.playerScore; break;
        case "loss": ++scores.computerScore; break;
    }

    confirm(`Player Score: ${scores.playerScore}\nCPU Score: ${scores.computerScore}`)
}

function playGame() {
    let scores = {
        playerScore : 0,
        computerScore : 0
    }

    let winner = "nobody";
    while(winner == "nobody") {
        playRound(scores);

        if(scores.playerScore == 5) {
            confirm("The player has won!");
            winner = "Player";
        } else if(scores.computerScore == 5) {
            confirm("The CPU has won!");
            winner = "CPU";
        } else {
            winner = "nobody";
        }
    }

    alert("Play Again?");
    window.location.reload();
}