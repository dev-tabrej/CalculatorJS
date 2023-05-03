// Get references to the DOM elements we'll be working with
const result = document.getElementById("result");
const input = document.getElementById("input");
const operatorButtons = document.querySelectorAll(".operator");
const buttons=document.querySelectorAll('button');
let string=''//it will store the input string to show in input lines 
input.textContent=" ";
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click',(e)=>{
        if(e.target.innerHTML==='='){
            string=eval(string);
            result.textContent=string;
        }
        else if(e.target.innerHTML==='AC'){
            string=" ";
            input.textContent=" ";
            result.textContent='0';
        }
        else if(e.target.innerHTML==='Del'){
            string=string.slice(0,-1);
            input.textContent=string;
        }
        else{
            string+=e.target.innerHTML;
            // result.textContent=string;
            input.textContent+=e.target.innerHTML;
        }
    });
});





