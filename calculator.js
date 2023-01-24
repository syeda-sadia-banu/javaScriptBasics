var a=0;
var b=0;

function addition(){
    a=parseInt(document.getElementById("num1").value);
    b=parseInt(document.getElementById("num2").value);
   var add=a+b;
   document.getElementById("result").value=add;
}
function subtraction(){
    a=parseInt(document.getElementById("num1").value);
    b=parseInt(document.getElementById("num2").value);
   var sub=a-b;
   document.getElementById("result").value=sub;

}
function multiplication(){
    a=parseInt(document.getElementById("num1").value);
    b=parseInt(document.getElementById("num2").value);
   var mul=a*b;
   document.getElementById("result").value=mul;
}
function division(){
    a=parseInt(document.getElementById("num1").value);
    b=parseInt(document.getElementById("num2").value);
   var div=a/b;
   document.getElementById("result").value=div;
}