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

function playerScore () {
    let humanScore = 0;
    let computerScore = 0;
}

function playRound (humanChoice, computerChoice) {
    const humanChoice = humanChoice.toLowerCase();
    const computerChoice = computerChoice.toLowerCaseCase();

    if (humanChoice === computerChoice) {
        console.log("")
    }

    if (humanChoice = "Rock" && computerChoice = "Scissors" ||
        
    )

}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);


        