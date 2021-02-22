var randomNumber1 = Math.random();
randomNumber1 = Math.floor(randomNumber1 * (6)) + 1;

var randomNumber2 = Math.random();
randomNumber2 = Math.floor(randomNumber2 * (6)) + 1;

var filepath = "images/dice";

document.querySelector(".img1").setAttribute("src", filepath + randomNumber1 + ".png");
document.querySelector(".img2").setAttribute("src", filepath + randomNumber2 + ".png");
