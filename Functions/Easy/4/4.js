// Given n numbers, your function should return the minimum of them all. The number of parameters won't be accepted from user.
// Example:
// Input: findMin(3,5) ––> Output: 3
// Input: findMin(3,5,9,1) ––> Output: 1
// (Hint: Lookup rest parameters in JavaScript)

const arr=[3,5,9,1];
let ans=100000;
for(let i=0;i<arr.length;i++){
    if(ans>arr[i]){
        ans=arr[i];
    }
}
console.log(ans);