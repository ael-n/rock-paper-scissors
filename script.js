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

function playGame() {
    
    let humanScore = 0;
    let computerScore = 0;
    
    function playRound(humanChoice, computerChoice) {
        const normalisedHumanChoice = humanChoice.toLowerCase();
        
        if (normalisedHumanChoice === computerChoice) {
            console.log(`It's a tie, both choose ${humanChoice}`);
            return 0;
        } else if (
            (normalisedHumanChoice === "rock" && computerChoice === "scissors") ||
            (normalisedHumanChoice === "paper" && computerChoice === "rock") ||
            (normalisedHumanChoice === "scissors" && computerChoice === "paper")
        ) {
            humanScore++;
            console.log(`You win! ${normalisedHumanChoice} beats ${computerChoice}`);
            return 1;
        } else {
            computerScore++;
            console.log(`You lose! ${computerChoice} beats ${normalisedHumanChoice}`);
            return -1;
        }
    }

    const rockBtn = document.querySelector("#rock");
    const paperBtn = document.querySelector("#paper");
    const scissorsBtn = document.querySelector("#scissors")

    rockBtn.addEventListener("click", () => { 
        playRound("rock");
    });

    paperBtn.addEventListener("click", () => {
        playGame("paper");
    });

    
   /* for (let i = 0; i < 5; i++) {
        console.log(`\n--- Round ${i + 1} ---`);
        
        const humanChoice = getHumanChoice();
        if (humanChoice === null) {
            console.log("Game cancelled!");
            break;
        }
        
        const computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
        console.log(`Current Score: You ${humanScore} - ${computerScore} Computer`);
    }*/
    
    console.log("\n=== GAME OVER ===");
    console.log(`Final Score: You ${humanScore} - ${computerScore} Computer`);
    
    if (humanScore > computerScore) {
        console.log("🎉 Congratulations! You won the game!");
    } else if (computerScore > humanScore) {
        console.log("💻 Computer wins! Better luck next time!");
    } else {
        console.log("🤝 It's a tie game!");
    }
}

playGame();