// Print the following star pattern :-

// *
// * *
// * * *
// * * * *
// * * * * *

let n=5;
let i=0;
let str="";

for( let i=0;i<n;i++){

    for(let j=0;j<=i;j++){
        str+="*";
    }
    str+="\n";

}
console.log(str);