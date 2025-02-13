let backgroundColor = document.getElementById("colorPickerContainer");
let changeHexcode = document.getElementById("selectedColorHexCode");

function firstColor() {
    backgroundColor.style.backgroundColor = "#e0e0e0";
    changeHexcode.textContent = "#e0e0e0";
    changeHexcode.style.color = "#49a6e9";
}

function secondColor() {
    backgroundColor.style.backgroundColor = "#6fcf97";
    changeHexcode.textContent = "#6fcf97";


}

function thirdColor() {
    backgroundColor.style.backgroundColor = "#56ccf2";
    changeHexcode.textContent = "#56ccf2";
}

function fourthColor() {
    backgroundColor.style.backgroundColor = "#bb6bd9";
    changeHexcode.textContent = "#bb6bd9";
}