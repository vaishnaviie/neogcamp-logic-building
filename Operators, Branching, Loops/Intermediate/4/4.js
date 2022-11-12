// Write a program to return a Fibonacci series : 0,1,1,2,3,5,8,13,21....

let a=0;
let b=1;
console.log(a)
console.log(b)
for(let i=0;i<10;i++){
    c=a+b;
    console.log(c);
    a=b;
    b=c;
}