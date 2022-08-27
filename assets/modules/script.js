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

/* LocalStorage */

localStorageRender();

function localStorageRender(){

    const point = localStorage.getItem("point");

    if( isNaN(point) || point == undefined ){
        localStorage.setItem("point", 0);
        score.innerText = localStorage.getItem("point"); 
    } else {
        score.innerText = localStorage.getItem("point"); 
    }

}

function localStorageUpdate(point){
    let localData = []; 
  
    localData.push(point);
    localData.push(parseFloat(localStorage.getItem("point"))); 
    
    const initialValue = 0; 
    let updatePoint = localData.reduce((previusValue, currentValue) => 
        previusValue + currentValue, initialValue
    );

    localStorage.setItem("point", updatePoint);
    score.innerText = updatePoint;

}

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

export function addPointRender(result){
    let point = 0;
    
    if (result == "YOU WIN"){
        point += 1;
    } else if ( result == "YOU LOSE") {
        point -= 1;
    }

    localStorageUpdate(point);

    setTimeout(()=>{
        selectionResult.style.display = "block";
        document.getElementById("outputResult").innerText = result;  
    },800); 

    setTimeout(()=>{
        selectionResult.style.display = "block";
        selectionResult.style.opacity = "1"; 
    },1000); 
}

export function selectionWinnerRender(result){
    let player; 

    if (result == "YOU WIN"){
        player = "player";
    } else if (result == "YOU LOSE"){
        player = "house";
    }
    
    setTimeout(()=>{
        for(let i = 0 ; i < 3 ; ++i){
            document.querySelector(`.selection__${player} .selection__button`).innerHTML += 
            `<div class="${"selection__pulse pulse"+[i]}"></div>`;
        }
    }, 1000);
}