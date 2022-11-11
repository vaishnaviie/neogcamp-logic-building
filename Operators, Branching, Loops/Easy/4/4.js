// Write a program to find the maximum out of three given numbers. The numbers are num1=8, num2=23 and num3=17.

let num1=8;
let num2=23;
let num3=17;

if(num1>num2 && num1>num3){
    console.log(`${num1} is greatest number`);
}
else if(num2>num1 && num2>num3){
    console.log(`${num2} is greatest number`);
}
else{
    console.log(`${num3} is greatest number`);
}