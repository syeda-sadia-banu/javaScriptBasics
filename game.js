// let firstCard=getRandomCard();
// let secondCard=getRandomCard();

// let cards=[firstCard,secondCard];
let cards=[]
 let sum= 0;//firstCard+secondCard;
let message="";
let isAlive=false;
let hasBlackJack=false;
let player={
    name:"per",
    chips:200
}
document.getElementById("player-el").textContent=player.name+":$"+player.chips;

function getRandomCard(){
    let randomNumber= Math.floor(Math.random()*13)+1;
    if(randomNumber>10){
        return 10
    }else if(randomNumber===1){
        return 11
    }else{
        return randomNumber
    }
}


function startGame(){
    isAlive=true;
    let firstCard=getRandomCard();
    let secondCard=getRandomCard();
    cards=[firstCard,secondCard];
    sum=firstCard+secondCard;
    renderGame();
}

function renderGame(){

    // document.getElementById("sum-el").textContent="sum:" +sum;

       // document.querySelector("body").textContent="sum:" +sum;
    
   // document.getElementById("cards-el").textContent="card:"+ cards[0] +" "+ cards[1];
    document.getElementById("cards-el").textContent="card:"
    for(let i=0;i<cards.length;i++){
        document.getElementById("cards-el").textContent+=cards[i]+" "; 
    }

    document.querySelector("#sum-el").textContent="sum:" +sum;
    if(sum<=20){
       
        // console.log("do you want to draw a new card?😊");
        message="do you want to draw a new card?😊"
     }
     else if(sum===21){
        // console.log("wohoo! you'have got blackjack🥳")
        message="wohoo! you'have got blackjack🥳";
        hasBlackJack=true;
     }
     else {
        // console.log("you're out of the game!😔")
         message="you're out of the game!😔"
         isAlive-false;
     }
     document.getElementById("message-el").textContent=message;
}
function newCard(){
    if(isAlive===true && hasBlackJack===false){
        let card=getRandomCard();
        cards.push(card);
       
        sum+=card;
      
        renderGame();
        console.log(cards)
    }
   
}
console.log(cards)

// let age=22;
//  if(age<21){
//         console.log("you can not enter the club!")

//  }else{
//      console.log("welcome!")
//  }

//  let age1=100;
//  if(age1<100){
//      console.log("not elegible")
//  }
//  else if(age1===100){
//      console.log("here is your birthday card from the king");
//  }else{
//     console.log("not elegible,you have already gotten one")
//  }