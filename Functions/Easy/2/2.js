// Given length of a regular hexagon, your function should return area of the hexagon.
// Example:
// Input: areaOfHexagon(10) ––> Output: 259.80
// Area = (3√3 s2)/2

const side=document.querySelector("#side");
const btnCalculate=document.querySelector("#btn");

const clickHandler=()=>{
    let sRoot=Math.sqrt(3);
    let sideSq=Number(side.value)*Number(side.value);
    let area=((3*sRoot*sideSq)/2);
    console.log(area.toFixed(2));
}

btnCalculate.addEventListener("click",clickHandler);