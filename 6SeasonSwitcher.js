let springSmImg = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-spring-xs-img.png";
let springLgImg = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-spring-md-img.png";
let summerSmImg = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-summer-xs-img.png";
let summerLgImg = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-summer-md-img.png";
let autumnSmImg = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-autumn-xs-img.png";
let autumnLgImg = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-autumn-md-img.png";
let winterSmImg = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-winter-xs-img.png";
let winterLgImg = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-winter-md-img.png";
let small_Image = document.getElementById("seasonSmallImage");
let Lg_img = document.getElementById("seasonMediumImage");
function changeSeasonToSpring(){
    small_Image.src = springSmImg;
    Lg_img.src = springLgImg;
}
function changeSeasonToSummer(){
    small_Image.src = summerSmImg;
    Lg_img.src = summerLgImg;
}
function changeSeasonToAutumn(){
    small_Image.src = autumnSmImg;
    Lg_img.src = autumnLgImg;
}
function changeSeasonToWinter(){
    small_Image.src = winterSmImg;
    Lg_img.src = winterLgImg;
}