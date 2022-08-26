import { addPointRender, selectionOptionRender } from "./script.js";
import selectWinner from    "./rulesGame.js";

/* Play Game */

export async function playGame(playerOne){ 

    let playerTwo = "paper"; 

    selectionOptionRender(playerOne, "player","YOU PICKED"); 
    selectionOptionRender(playerTwo, "house", "THE HOUSE PICKED");
    addPointRender(selectWinner(playerOne, playerTwo));  
     
}