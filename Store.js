function doit()
{
var button=document.getElementById("button");
button.addEventListener("click",saveit,false);

}

function saveit(){
 var one= document.getElementById("one").value;
var two= document.getElementById("two").value;
sessionStorage.setItem(one,two);
display(one);
}

function display(one){
  
  var right= doucument.getElementById("right");
  var two=sessionStorage.getItem(two);
  right.innerHTML="the key is "+one+" and the value is  "+two+"<br />";

}
window.addEventListener("load",doit,false);