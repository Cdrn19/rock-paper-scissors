// Rules game // 

export default function selectWinner(playerOne, playerTwo) {
    if (playerOne === "rock" && playerTwo === "scissors"  ||  
        playerOne === "scissors" && playerTwo === "paper" || 
        playerOne === "paper" && playerTwo === "rock"){
            return "YOU WIN"; 
        } else if (playerOne === playerTwo) {
            return "YOU DRAW"; 
        } else {
            return "YOU LOSE"; 
    }
}