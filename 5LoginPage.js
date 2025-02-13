let inputElement = document.getElementById("inputElement");
let signInTextElement = document.getElementById("signInText");
function signIn() {
  let inputValue = inputElement.value;
  let verifyText = "Hi " + inputValue + ", verifying your account,Please Wait..!";
  signInTextElement.textContent = verifyText;
}