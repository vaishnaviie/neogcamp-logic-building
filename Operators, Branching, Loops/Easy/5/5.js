// Write a program to find the minimum out of three given numbers. The numbers are num1=35, num2=29 and num3=46.

let num1=35;
let num2=29;
let num3=45;

if(num1<num2 && num1<num3){
    console.log(`${num1} is a smallest number`);
}
else if(num2<num1 && num2<num3){
    console.log(`${num2} is a smallest number`);
}
else{
    console.log(`${num3} is a smallest number`);
}