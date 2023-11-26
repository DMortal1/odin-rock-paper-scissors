while(1) {
    let playerChoice = getPlayerChoice();
    if(playerChoice == "null") {continue;}
    let computerChoice = getComputerChoice();
}

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