// Given a sentence, your functions should return the number of words in the sentence.
// Example:
// Input: noOfWords(We are neoGrammers) ––> Output: 3

const text=document.querySelector("#text");
const btnCalculate=document.querySelector("#btn");

const clickHandler=()=>{
    let myText=text.value;
    let count=1;
    for(let i=0;i<myText.length;i++){
        if(myText[i]===" "){
            count++;
        }
    }
    console.log(count);
}

btnCalculate.addEventListener("click",clickHandler)