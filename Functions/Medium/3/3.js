// Given an array and two numbers, your function should replace all entries of first number in an array with the second number.
// Example:
// Input: replace([1,5,3,5,6,8], 5, 10) ––> Output: [1,10,3,10,6,8]

const arr=[1,5,3,5,6,8];
const item_1=5;
const item_2=10;

for(let i=0;i<arr.length;i++){
    if(arr[i]===item_1){
        arr[i]=item_2;
    }
}

for(let i=0;i<arr.length;i++){
    console.log(arr[i]);
}

