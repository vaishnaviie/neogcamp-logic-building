// Write program to take a month as an input from the user and find out whether the month has 31 days or not.

const month=document.querySelector("#month");

const thirtyOneDays=["Jan","March","May","July","Aug","Oct","Dec"];

const inputHandler=()=>{
    if(thirtyOneDays.includes(month.value)){
        console.log(`${month.value} has 31 days`);
    }
    else{
        console.log(`${month.value} does not have 31 days`);
    }
}

month.addEventListener("input",inputHandler);