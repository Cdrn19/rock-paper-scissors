import hostPlayer  from "./hostPlayer.js"; 
import botPlayer from "./botPlayer.js"; 
import { addPointRender, selectionOptionRender } from "./script.js";
import selectWinner from    "./rulesGame.js";

/* Play Game */

export async function playGame(){ 
    let playerOne = hostPlayer(), playerTwo = botPlayer();

    selectionOptionRender(playerOne, "player","YOU PICKED"); 
    selectionOptionRender(playerTwo, "house", "THE HOUSE PICKED");
    addPointRender(selectWinner(playerOne, playerTwo));  
     
}