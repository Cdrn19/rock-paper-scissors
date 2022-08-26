/* Modal input */ 

const rulesModal = document.getElementById("rules-modal");
const openBtn = document.getElementById("openBtn");
const closeBtn = document.getElementById("closeBtn"); 

/* Play Game input */

const score = document.getElementById("score");
const main = document.getElementById("main"); 
const mainButton = document.getElementsByClassName("main__button"); 
const playAgainBtn = document.getElementById("playAgainBtn");
const selection = document.getElementById("selection");
const selectionResult = document.querySelector(".selection__result");

/* Modal */ 

openBtn.addEventListener("click", () => {
    rulesModal.style.display = "grid";  
}); 

closeBtn.addEventListener("click", () => {
    rulesModal.style.display = "none";
});

/* Play Game */

import { playGame } from "./playGame.js";

for( let i = 0  ; i < mainButton.length ; ++i ) {
    mainButton[i].addEventListener("click",() => {
        main.style.display = "none";    
        selection.style.display = "flex";
        selectionResult.style.display = "none"; 
        selectionResult.style.opacity = "0";  
        playGame();
    });
}

playAgainBtn.addEventListener("click", () => {
    main.style.display = "grid";
    selection.style.display = "none";
});

/* Rendering */

export function selectionOptionRender(selectionPlayer, player,who){
    document.querySelector(".selection__house").innerHTML = 
    `<h2>THE HOUSE PICKED</h2>
    <button class="selection__wait">
    </button>`;
    document.querySelector(`.selection__${player}`).innerHTML = 
    `<h2>${who}</h2>
    <button class="selection__button ${selectionPlayer}">
        <figure class="selection__button--figure ${selectionPlayer}">
            <img src="./assets/images/icon-${selectionPlayer}.svg" alt="${selectionPlayer}-icon">
        </figure>
    </button>`;
}

export async function addPointRender(result){
    let point = 0;
    
    if (result == "YOU WIN"){
        point += 1;
    } else if ( result == "YOU LOSE") {
        point -= 1;
    }

    
    score.innerText = point;

    setTimeout(()=>{
        selectionResult.style.display = "block";
        document.getElementById("outputResult").innerText = result;  
    },1000); 

    setTimeout(()=>{
        selectionResult.style.display = "block";
        selectionResult.style.opacity = "1"; 
    },2000); 
}