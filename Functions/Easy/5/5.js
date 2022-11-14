// Given n numbers, your function should return the maximum of them all. The number of parameters won't be accepted from user.
// Example:
// Input: findMax(3,5) ––> Output: 5
// Input: findMax(3,5,9,1) ––> Output: 9
// (Hint: Lookup rest parameters in JavaScript)

const arr=[3,5,9,1];
let ans=0;
for(let i=0;i<arr.length;i++){
    if(arr[i]>ans){
        ans=arr[i];
    }
}
console.log(ans);