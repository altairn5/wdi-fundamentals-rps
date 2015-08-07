////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("\nPlease choose either 'rock', 'paper', or 'scissors'.");
    return prompt();
}


function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    move = getInput();
    console.log("You picked: " + move);
    return move;
    }

function getComputerMove(move) {
   move = randomPlay();
   console.log("The computer picked: "+ move);
   return move;
}

function getWinner(playerMove,computerMove){
   var winner;
   playerMove = getPlayerMove();
   computerMove = getComputerMove();
   
    if (playerMove === computerMove){
       winner = "tie";
    }
     if(playerMove === "rock"){
         if(computerMove === "scissors"){
            winner = "player";
            }
            else if(computerMove === "paper"){
                     winner = "computer";
            }
    }
    if(playerMove === "paper"){
        if(computerMove === "rock"){
            winner = "player";
            }
             else if(computerMove === "scissors"){
                     winner = "computer";
            }
    }
    if(playerMove === "scissors"){
        if(computerMove ==="paper"){
            winner = "player";
           }
            else if(computerMove === "rock"){
                    winner = "computer";
            }
    }
    else if(winner === undefined){
        winner = "wrong!";
   }
    return winner;
}



function playToFive() {
console.log("Let's play Rock, Paper, Scissors");

var playerWins = 0;
var computerWins = 0;
var whoWon;

    while(playerWins < 5 && computerWins < 5){
    whoWon = getWinner();
    
    if(whoWon === "wrong!"){
        console.log("\nYour pick is not valid. Try  again");
    }
	else if(whoWon === "tie"){
		console.log("It is a " + whoWon + "!");
	}
    else if(whoWon === "player"){
        playerWins++;
	    if(playerWins < 5){
	        console.log("\nYou win this time!");
	   } 
    }  
    else if(whoWon === "computer"){
        computerWins++;
        if(computerWins < 5){
            console.log("\nThe machine wins this round :( ");
        }
    }
	if(playerWins === 5){
	    console.log("\nThe game is over");
		console.log("Congrats!, you have won the game!");
	}
	else if(computerWins === 5){
	    console.log("\nThe game is over");
		console.log("Sorry, the machine rules. You lost the game :( !");
	    
	}
}
 return console.log("Final Score: " + [playerWins,computerWins]);
}

 playToFive();
