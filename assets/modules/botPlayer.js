// Bot game // 

const options = ["rock", "paper", "scissors"];

export default function botPlayer(){
    
    let numRandom = Math.floor(Math.random()*3);
    let selectRandom = options[numRandom];

    return selectRandom;   
}








