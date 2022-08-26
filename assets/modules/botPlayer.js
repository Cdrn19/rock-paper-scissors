// Bot game // 

export default async function botPlayer(){
    const options = ["rock", "paper", "scissors"];

    return new Promise(
        resolve => {
            setTimeout(()=>{
                let numRandom = Math.floor(Math.random()*3);
                let selectRandom = options[numRandom];
                
                resolve(selectRandom);
            },1000);
        }
    ); 
}






