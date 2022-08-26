import { addPointRender, selectionOptionRender } from "./script.js";

/* Play Game */

export async function playGame(playerOne){ 

    let playerTwo = "paper"; 

    selectionOptionRender(playerOne, "player","YOU PICKED"); 
    selectionOptionRender(playerTwo, "house", "THE HOUSE PICKED");
    addPointRender("YOU WIN");  
     
}