// Host Player //

const mainButton = document.getElementsByClassName("main__button");

let select;

for(let i = 0 ; i < mainButton.length ; ++i){
        mainButton[i].addEventListener("click", ()=>{
        select = (mainButton[i].value);
    });
}

export default async function hostPlayer(){     
    return select; 
}
