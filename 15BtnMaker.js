let bgColorInputEle = document.getElementById("bgColorInput");
let fontColorInputEle = document.getElementById("fontColorInput");
let fontSizeInputEle = document.getElementById("fontSizeInput");
let fontWeightInputEle = document.getElementById("fontWeightInput");
let paddingInputEle = document.getElementById("paddingInput");
let borderRadiusInputEle = document.getElementById("borderRadiusInput");
let customButtonEle = document.getElementById("customButton");

function apply(){
    customButtonEle.style.backgroundColor = bgColorInputEle.value;
    customButtonEle.style.color = fontColorInputEle.value;
    customButtonEle.style.fontSize = fontSizeInputEle.value;
    customButtonEle.style.fontWeight = fontWeightInputEle.value;
    customButtonEle.style.padding = paddingInputEle.value;
    customButtonEle.style.borderRadius = borderRadiusInputEle.value;
}
