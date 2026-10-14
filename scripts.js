// Fetch buttons
const rockChoiceButton = document.getElementById("rockChoice");
const paperChoiceButton = document.getElementById("paperChoice");
const scissorsChoiceButton = document.getElementById("scissorsChoice");

// Fetch items to edit
const computerChoiceWindow = document.getElementById("computerChoice");
const resultWindow = document.getElementById("resultWindow");
const computerScore = document.getElementById("computerScore");
const playerScore = document.getElementById("playerScore");

// Link buttons to game logic
rockChoiceButton.addEventListener( 'click', () => { playRound('rock') } );
paperChoiceButton.addEventListener( 'click', () => { playRound('paper') } );
scissorsChoiceButton.addEventListener( 'click', () => { playRound('scissors') } );

// Play a round of RPC
function playRound(playerChoice) {
    // Fetch the computer's choice
    let computerChoice = getComputerChoice();

    // Update the computer choice window
    updateComputerMoveWindow(computerChoice);

    // Determine who won the round
    let winner = determineWhoWon(playerChoice, computerChoice);

    // Update the result window with the outcome of the match
    updateResultWindow(winner);

    // Update the score with the outcome of the match
    updateScore(winner);
}

// Generate a random computer choice
function getComputerChoice() {
    let choice = Math.floor( ( Math.random() * 3 ) );

    switch(choice) {
        case 0: return 'rock';
        case 1: return 'paper';
        case 2: return 'scissors';
        default: return 'getComputerChoice: error';
    }
}

// Take the computer's choice and update the computer choice window on the main page
function updateComputerMoveWindow(computerChoice) {
    let choice = 'X'

    switch(computerChoice) {
        case 'rock': choice = 'R'; break;
        case 'paper': choice = 'P'; break;
        case 'scissors': choice = 'S'; break;
    }

    computerChoiceWindow.textContent = choice;
}

// Take two choices and determine who won
function determineWhoWon(playerChoice, computerChoice) {
    // If same choice, it's a tie
    if(playerChoice === computerChoice) {
        return 'tie';
    }

    // Determine winner by comparing computer to player
    if(playerChoice === 'rock') {
        // Paper beats rock
        if(computerChoice === 'paper') {
            return 'computer';
        }

        // Rock beats scissors
        if(computerChoice === 'scissors') {
            return 'player';
        }
    }
    
    if(playerChoice === 'paper') {
        // Scissors beats paper
        if(computerChoice === 'scissors') {
            return 'computer';
        }

        // Paper beats rock
        if(computerChoice === 'rock') {
            return 'player';
        }
    }
    
    if(playerChoice === 'scissors') {
        // Rock beats scissors
        if(computerChoice === 'rock') {
            return 'computer';
        }

        // Scissors beats paper
        if(computerChoice === 'paper') {
            return 'player';
        }
    }

    return "determineWhoWon: error";
}

// Update the results window with the outcome of the round
function updateResultWindow(winner) {
    let outcome = "Something went wrong!";

    switch(winner) {
        case 'tie': outcome = 'It\'s a tie!'; break;
        case 'computer': outcome = 'The computer won...'; break;
        case 'player': outcome = 'You won!!!'; break;
    }

    resultWindow.textContent = outcome;
}

// Update the score with the result of the match
function updateScore(winner) {
    switch(winner) {
        case 'tie': /*Nothing to do on a tie*/ break;
        case 'computer': computerScore.textContent = parseInt(computerScore.textContent) + 1;  break;
        case 'player': playerScore.textContent = parseInt(playerScore.textContent) + 1; break;
        default: console.log("updateResultWindow: error. Was given [%s]", winner); break;
    }
}