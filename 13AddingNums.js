let num1 = document.getElementById("firstNumber");
let num2 = document.getElementById("secondNumber");
let userInputElement = document.getElementById("userInput");
let para = document.getElementById("gameResult");

let wrongAns = "Please Try Again!";
let rightAns = "Congratulations! You got it right.";

function newNumGen() {
  let randNumber1 = Math.ceil(Math.random() * 100);
  let randNumber2 = Math.ceil(Math.random() * 100);
  num1.textContent = randNumber1;
  num2.textContent = randNumber2;
  userInputElement.value = "";
  para.textContent = "";
}

newNumGen();

function addingNums() {
    let n1 = parseInt(num1.textContent);
    let n2 = parseInt(num2.textContent);
    let givenSum = parseInt(userInputElement.value);  // Declare here with a default value

    if (isNaN(givenSum)) {
        para.textContent = "Enter a valid sum...!";  // Check if input is a valid number
    } else {

        let newNum = n1 + n2;
        if (givenSum === newNum) {
            para.textContent = rightAns;
        } else {
            para.textContent = wrongAns;
        }
    }
}
