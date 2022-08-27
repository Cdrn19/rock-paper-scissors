import hostPlayer  from "./hostPlayer.js"; 
import botPlayer from "./botPlayer.js"; 
import { addPointRender, selectionOptionRender, selectionWinnerRender } from "./script.js";
import selectWinner from    "./rulesGame.js";

/* Play Game */

export async function playGame(){ 
    let playerOne, playerTwo; 

    await hostPlayer()
        .then(function(value){
            selectionOptionRender(value, "player","YOU PICKED");
            playerOne = value; 
        })
        .catch(console.error); 

    await botPlayer()
        .then(function(value){
            if (typeof value == "string")
            selectionOptionRender(value, "house", "THE HOUSE PICKED");
            playerTwo = value; 
        })
        .catch(console.error); 
        
    await selectWinner(playerOne, playerTwo)
        .then(function(value){
            addPointRender(value);
            selectionWinnerRender(value);  
        })
        .catch(console.error);
      
}