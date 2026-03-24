function getComputerChoice() {
    const randomNumber = Math.random()

    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}

function playGame() {
    
    let humanScore = 0;
    let computerScore = 0;
    let roundsPlayed = 0;
    const maxRounds = 5;
    
    function playRound(humanChoice, computerChoice) {
        const normalisedHumanChoice = humanChoice.toLowerCase();
        
        if (normalisedHumanChoice === computerChoice) {
            console.log(`It's a tie, both chose ${humanChoice}`);
            return 0;
        } else if (
            (normalisedHumanChoice === "rock" && computerChoice === "scissors") ||
            (normalisedHumanChoice === "paper" && computerChoice === "rock") ||
            (normalisedHumanChoice === "scissors" && computerChoice === "paper")
        ) {
            humanScore++;
            console.log(`You choose ${normalisedHumanChoice} and the conputer choose ${computerChoice}`);
            console.log(`You win! ${normalisedHumanChoice} beats ${computerChoice}`);
            return 1;
        } else {
            computerScore++;
            console.log(`You choose ${normalisedHumanChoice} and the conputer choose ${computerChoice}`);
            console.log(`You lose! ${computerChoice} beats ${normalisedHumanChoice}`);
            return -1;
        }
    }
    
    function displayScore() {
        console.log(`Current Score: You ${humanScore} - ${computerScore} Computer`);
    }
    
    function checkGameOver() {
        if (roundsPlayed === maxRounds) {
            console.log(`5 Rounds Play`)
            console.log("\n=== GAME OVER ===");
            console.log(`Final Score: You ${humanScore} - ${computerScore} Computer`);
            
            if (humanScore > computerScore) {
                console.log("🎉 Congratulations! You won the game!");
            } else if (computerScore > humanScore) {
                console.log("💻 Computer wins! Better luck next time!");
            } else {
                console.log("🤝 It's a tie game!");
            }
            
            // Disable buttons after game ends
            rockBtn.disabled = true;
            paperBtn.disabled = true;
            scissorsBtn.disabled = true;
            
            return true;
        }
        return false;
    }
    
    function handleGame(playerChoice) {
        // Check if game is already over
        if (roundsPlayed >= maxRounds) {
            console.log("Game is over! Please refresh to play again.");
            return;
        }
        
        roundsPlayed++;
        console.log(`\n--- Round ${roundsPlayed} ---`);
        
        const computerChoice = getComputerChoice();
        playRound(playerChoice, computerChoice);
        displayScore();
        
        checkGameOver();
    }
    
    const rockBtn = document.querySelector("#rock");
    const paperBtn = document.querySelector("#paper");
    const scissorsBtn = document.querySelector("#scissors");
    
    rockBtn.addEventListener("click", () => { 
        handleGame("rock");
    });
    
    paperBtn.addEventListener("click", () => {
        handleGame("paper");
    });
    
    scissorsBtn.addEventListener("click", () => {
        handleGame("scissors");
    });
    
    console.log("Game started! Click a button to play Rock, Paper, Scissors!");
    console.log(`Best of ${maxRounds} rounds!`);
}

playGame();