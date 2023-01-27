let person={
    name:"sadia",
    age:26,
    country:"India"
}
function logData(){
    console.log(person.name+" is "+person.age+" years old and lives in "+person.country);
}
logData();

let age=55;
if(age<6){
    console.log("free")
}else if(age<18){
    console.log("child discount")
}else if(age<27){
    console.log("student discount")
}else if(age<67){
    console.log("full price")
}else{
    console.log("senior citizen discount")
}


let largeCountries=["China","India","USA","Indonesia","Pakistan"];
console.log("The 5 largest Countries in the world:")
for(let i=0; i<largeCountries.length; i++){
    
    console.log("- "+largeCountries[i]);
}

let dayOfMonth=13
let weeekday="Friday"
if(dayOfMonth===13 && weeekday==="Friday"){
    console.log("😱")
}

let hands=["rock","paper","scisoor"]
function getHands(){
    let randomIndex=Math.floor(Math.random()*3)
    return hands[randomIndex]
}
console.log(getHands())

let fruit=["🍎","🍊","🍎","🍎","🍊"]
let appleShelf=document.getElementById("apple-shelf");
let orangeShelf=document.getElementById("orange-shelf");
function sortFruit(){
    for(let i=0;i<fruit.length;i++){
        if(fruit[i]==="🍎"){
            appleShelf.textContent+="🍎"

        }else {
            orangeShelf.textContent+="🍊"
        }
       
    }

}
sortFruit();