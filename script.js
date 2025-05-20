
//Rock Paper Scissors Game

//  function to get computer choice 

function getComputerChoice() {
    let randomNumber = (Math.floor(Math.random() * 3) + 1);
    console.log(randomNumber);
    if(randomNumber === 1){
        return "Rock";
    } else if(randomNumber === 2){
        return "Paper";
    }else{
        return "Scissor";    
    }
}

// function to get human choice from prompt

function getHumanChoice(){
    let choice = prompt("Enter your choice : Rock, Paper or Scissor");

    return choice;
}

// now it is a playGame function inside this there is a playRound function which decides the result

function playGame(){
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {

        // optional
    // humanChoice = humanChoice.toLowerCase();
    // computerChoice = computerChoice.toLowerCase();

        if (humanChoice === computerChoice) {
            console.log("It's a tie!");
        } else if (
            (humanChoice === "Rock" && computerChoice === "Scissor") ||
            (humanChoice === "Paper" && computerChoice === "Rock") ||
            (humanChoice === "Scissor" && computerChoice === "Paper")
        ) {
            console.log("You win!");
            humanScore++;
        } else {
            console.log("Computer wins!");
            computerScore++;
        }

    }

    // it's a loop which runs from 0 to 4 as we have to play 5 rounds of game

    for(let i = 0; i < 5; i++){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);
    }

    console.log("Final Score: ");
    console.log("You: " + humanScore);
    console.log("Computer: " + computerScore);   

}

// calling the playGame function to start the game

playGame();