// Given a and b, your function should return the value of ab
// Example:
// Input: power(2,3) ––> Output: 8

const num1=document.querySelector("#num1");
const num2=document.querySelector("#num2");
const btn=document.querySelector("#btn");

const calculatePower=()=>{
    let myNum1=Number(num1.value);
    let myNum2=Number(num2.value);
    let answer= (Math.pow(myNum1,myNum2) );
    console.log(answer);
}

btn.addEventListener("click",calculatePower);