// Write a program to take a number input from user and determine whether the number is odd or even.

const userNumber=document.querySelector("#num");

const inputHandler=()=>{
    if(Number(userNumber.value)%2===0){
        console.log(Number(userNumber.value));
        console.log("Even number");
    }
    else{
        console.log("Odd number");
    }
}

userNumber.addEventListener("input",inputHandler)
