// function saveLead(){
//     console.log("button Clicked");
// }

// let inputBtn=document.getElementById("input-btn")
// inputBtn.addEventListener("click",function(){
//     console.log("button clicked from addEventListener")

// })

let box=document.getElementById("box");
box.addEventListener("click",function(){
    console.log("I want to open the box!")
})

///////////////////////
let myLeads=["www.awesomelead.com","www.wpiclead.com"];
const inputEl=document.getElementById("input-el")
const inputBtn=document.getElementById("input-btn")
const ulEl=document.getElementById("ul-el")
inputBtn.addEventListener("click",function(){
    //myLeads.push("www.awesomelead.com")
    myLeads.push(inputEl.value)
    console.log(myLeads)
})
for(let i=0;i<myLeads.length;i++){
   // ulEl.textContent+=myLeads[i]
   ulEl.innerHTML+="<li>"+myLeads[i]+" "+"</li>"

}
