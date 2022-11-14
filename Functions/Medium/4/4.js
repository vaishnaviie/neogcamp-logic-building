// Given two arrays, your function should return single merged array.
// Example:
// Input: mergeArray([1,3,5], [2,4,6]) ––> Output: [1,3,5,2,4,6]

const arr1=[1,3,5];
const arr2=[2,4,6];

let arr1Size=arr1.length;
let arr2Size=arr2.length;

const size=arr1Size+arr2Size;

for(let i=0;i<size;i++){
    arr1.push(arr2[i]);
}

for(let i=0;i<size;i++){
    console.log(arr1[i]);
}
