// class="seconds-box"
let hoursInpEl = document.getElementById("hoursInput");
let minInpEl = document.getElementById("minutesInput");
let btnEle = document.getElementById("convertBtn");
let outputEl = document.getElementById("timeInSeconds");
let errorMsgEl = document.getElementById("errorMsg");
let  divBoxEl= document.getElementById("div_box");

function convertToSeconds()
{
    let h = parseInt(hoursInpEl.value);
    let m = parseInt(minInpEl.value);
    outputEl.textContent = h*3600+m*60+" Seconds";
    divBoxEl.classList.add("seconds-box");
}

function Inputfield(){
if(hoursInpEl.value==="")
{
    errorMsgEl.textContent = "Enter Valid Hours Value..!";
    outputEl.textContent = "";
    divBoxEl.classList.remove("seconds-box");
    
}
else if(minInpEl.value==="")
{
    errorMsgEl.textContent = "Enter Valid minutes Value..!";
    outputEl.textContent = "";
    divBoxEl.classList.remove("seconds-box");
}
else{
    errorMsgEl.textContent = "";
    convertToSeconds();
}
}

btnEle.addEventListener("click", Inputfield);