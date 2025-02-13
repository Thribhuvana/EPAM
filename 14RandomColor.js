let bgColorsArray = ["#e75d7c","#b16cef","#53cca4","#efc84d","#628ef0", "#184b73","#883e7f","#ed048b"];
let l = bgColorsArray.length;
let bgContainerElement = document.getElementById("bgContainer");
function colorChange(){
    let randomBgColorIndex = Math.ceil(Math.random() * l);
    if (randomBgColorIndex===1){
        randomBgColorIndex = 0;
    }
    else if(randomBgColorIndex === l)
    {
    randomBgColorIndex = l - 1;
    }
    let randomBgColor = bgColorsArray[randomBgColorIndex];
    bgContainerElement.style.backgroundColor = randomBgColor;
}
