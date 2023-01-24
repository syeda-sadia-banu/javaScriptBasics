let cards=[6,7];
let sum=cards[0]+cards[1];
let message="";
function startGame(){
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
     }
     else {
        // console.log("you're out of the game!😔")
         message="you're out of the game!😔"
     }
     document.getElementById("message-el").textContent=message;
}
function newCard(){
    let card=2;
    cards.push(card);
   
    sum+=card;
    console.log(cards)
    renderGame();
    console.log(cards)
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