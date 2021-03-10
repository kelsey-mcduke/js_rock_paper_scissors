      //variable to count player wins
      let playerScore = 0;
      //vartiable to count computer wins 
      let computerScore = 0;

      // create function that plays for 5 rounds and prints the score and winner
      function game () {

        for (i = 0; i < 5; i++ ) {
          //prompt user for rock, paper, or scissors
          let playerInput = prompt("Enter: Rock, Paper, or Scissors");
          //store users answer in parameter playerSelection
          let playerSelection = playerInput.toLowerCase();
          //store computer response in parameter computerSelection
          let computerSelection = computerPlay();
          singleRound(playerSelection, computerSelection);
        }
        if (playerScore > computerScore) {
          alert("You win! You won " + playerScore + " games out of 5 games!");
        } else {
          alert("You lose! The computer won " + computerScore + " games out of 5 games!");
        }
      }
      
      //create function that generates random response rock, paper, or scissors
      function computerPlay () {
        let choice = Math.floor(Math.random() * (12-1) + 1);
        if (choice <= 4) {
          return "rock";
        } else if (choice <= 8) {
          return "paper";
        } else {
          return "scissors"
        }
        return computerSelection;
      } 

      //create function singleRound comparing playerSelection and computerSelection
      function singleRound (playerSelection, computerSelection) {
        if (playerSelection === computerSelection) {
          return "It's a tie!"
        } else if (playerSelection === "rock" && computerSelection === "scissors") {
          // return "You Win! Rock beats Scissors!"
          return playerScore++;
        } else if (playerSelection === "rock" && computerSelection === "paper") {
          // return "You Lose! Paper beats Rock!"
          return computerScore++;
        } else if (playerSelection === "paper" && computerSelection === "scissors") {
          // return "You Lose! Scissors beats Paper!"
          return computerScore++;
        } else if (playerSelection === "paper" && computerSelection === "rock") {
          // return "You Win! Paper beats Rock!"
          return playerScore++;
        } else if (playerSelection === "scissors" && computerSelection === "rock") {
          // return "You Lose! Rock beats scissors!"
          return computerScore++;
        } else {
          // return "You Win! Scissors beat Paper!"
          return playerScore++;
        }
      }

      let startGame = document.getElementById("start-game");
      startGame.addEventListener("click", game);