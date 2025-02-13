let h1Ele = document.createElement("h1");
h1Ele.textContent = "Web Technologies";
let containerEle = document.getElementById("myContainer");
containerEle.appendChild(h1Ele);
let btnEle = document.createElement("button");
btnEle.textContent = "Change Heading";
containerEle.appendChild(btnEle);
btnEle.onclick = function()
{
    h1Ele.textContent = "4.O Technologies";
    h1Ele.classList.add("heading");

}
let btnElem = document.createElement("button");
btnElem.textContent = "Remove Styles";
containerEle.appendChild(btnElem);
btnElem.onclick = function()
{
    h1Ele.classList.remove("heading");

}