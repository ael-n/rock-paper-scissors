function getComputerChoice () {
    const randomNumber = Math.random()

    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors"
    }
}

function getHumanChoice () {
    const choice = prompt("Enter Rock, Paper or Scissors!")
    return choice;
}

function playRound (humanChoice, computerChoice) {
    const normalisedHumanChoice = humanChoice.toLowerCase();

    if (normalisedHumanChoice === computerChoice) {
        console.log(`It's a tie, both choose ${humanChoice}`)
        return 0;
    }

    else if (
        (normalisedHumanChoice === "rock" && computerChoice === "scissors") ||
        (normalisedHumanChoice === "paper" && computerChoice === "rock") ||
        (normalisedHumanChoice === "scissors" && computerChoice === "paper")
    ) { 
        humanChoice++;
        console.log(`You win! ${normalisedHumanChoice} beat ${computerChoice}`)
        return 1;
    }

    else  {
        computerChoice++;
        console.log(`You loose ${computerChoice} beat ${normalisedHumanChoice}`)
        return -1;
    }
}

const humanChoice = getHumanChoice();
const computerChoice = getComputerChoice();

playGame(humanSelection, computerSelection) {

    for( let i=0; i < 5; i++)
}


        