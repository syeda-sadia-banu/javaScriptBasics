// let myAge=26;
// let humanDogRatio=3;
// let myDogAge=myAge*humanDogRatio
// console.log(myDogAge);

// let bonusPoints=50;
// console.log(bonusPoints)

// bonusPoints=bonusPoints+100;
// console.log(bonusPoints)


// bonusPoints=bonusPoints-25;
// console.log(bonusPoints);


// bonusPoints=bonusPoints+70;
// console.log(bonusPoints);
let count=0;

function increment(){

count+=1;
document.getElementById("count-el").innerText=count;
console.log(count);

 }

 function save(){
   let preEntries=count+" -";
   document.getElementById("save-el").innerText+=preEntries;
    console.log("save",count);
    document.getElementById("count-el").innerText=0;
    count=0;
 }


//  let name="sadia";
//  let greeting="hello";
//  let text=name+"✨";
//  console.log(text);

// let firstName="sadia";
// let lastName=" banu";
// let fullName=firstName+lastName;
// console.log(fullName);

// let name="linda";
// let greeting="Hi there";
// function greetLinda(){
//    console.log(greeting+ ","+name+"!");
// }
// greetLinda();
let myPoints=3;
function add3Points(){
myPoints+=3;
}
function remove1Point(){
myPoints-=1;
}
add3Points();
add3Points();
add3Points();
remove1Point();
remove1Point();

console.log(myPoints);