let new_img = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/white-puppy-liked-img.png";
let old_img = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/white-puppy-img.png";
let img_id = document.getElementById("puppyImage");
let iconID_ele = document.getElementById("likeIcon");
let buttonID_element = document.getElementById("likeButton");
let isImageLiked = false;
function onClickLikeButton()
{
    if (isImageLiked === false) {
    img_id.src = new_img;
    iconID_ele.style.color = "#0967d2";     
    buttonID_element.style.backgroundColor = "#0967d2";  
    buttonID_element.style.color = "#ffffff";     
    isImageLiked = true; 
 }
    else
    {
        img_id.src = old_img;
        iconID_ele.style.color = "#cbd2d9"; 
        buttonID_element.style.backgroundColor = "#cbd2d9"; 
        buttonID_element.style.color = "#9aa5b1";
        isImageLiked = false;
    }
}