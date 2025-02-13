let gameResult = document.getElementById("gameResult");
let userInput = document.getElementById("userInput");
let randomNumber = Math.ceil(Math.random()*100)
function checkGuess() {
    let guessedValue = parseInt(userInput.value)
    if (guessedValue > randomNumber)
    {
        gameResult.textContent = "Too High..! Try Again.";
        gameResult.style.backgroundColor = "#1e217c"
    }
    else if (guessedValue < randomNumber)
    {
        gameResult.textContent = "Too Low..! Try Again.";
        gameResult.style.backgroundColor = "#1e217c"
    }
    else 
    {
        gameResult.textContent = "Congratulations..!You got it right";
        gameResult.style.backgroundColor = "green"
    }

}