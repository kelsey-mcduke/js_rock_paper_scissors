This is a JavaScript Project from The Odin Project:

The goal is to (first step) create a Rock Paper Scissors game played within the console.

Steps:
 [X] Create function called computerPlay
 [X] computerPlay should return a random response of 'Rock', 'Paper', or 'Scissors'
 [X] Create function that plays a single round of Rock Paper Scissors and call it singleRound
 [X] singleRound should take two parameters (playerSelection, computerSelection) and then return a string that declares the winner of the round: "You Lose! Paper beats Rock"
 [X] make function case insensitive
 [X] make sure you are returning the results of the function call not console.log()
 [ ] create another function called game() and use singleRound() to play a 5 round game that keeps score and reports winner/loser at the end.
 [X] use prompt() to get input from the user

PSUEDOCODE (For user prompt to first round):

//prompt user for rock, paper, or scissors
//store users answer in parameter playerSelection
//create function that generates random response rock, paper, or scissors
//store computer response in parameter computerSelection
//create function singleRound comparing playerSelection and computerSelection
//IF playerSelection === computerSelection return "It's a tie!"
//ELSE IF playerSelection === "rock" && computerSelection === "scissors" return "You Win! Rock beats Scissors!"
//ELSE IF playerSelection === "rock" && computerSelection === "paper" return "You Lose! Paper beats Rock!"
//ELSE IF playerSelection === "paper" && computerSelection === "scissors" return "You Lose! Scissors beats Paper!"
//ELSE IF playerSelection === "paper" && computerSelection === "rock" return "You Win! Paper beats Rock!"
//ELSE IF playerSelection === "scissors" && computerSelection === "rock" return "You Lose! Rock beats scissors!"
//ELSE return "You Win! Scissors beat Paper!"
