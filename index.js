var randomNumber1 = Math.random();
randomNumber1 = Math.floor(randomNumber1 * (6)) + 1;

var randomNumber2 = Math.random();
randomNumber2 = Math.floor(randomNumber2 * (6)) + 1;

var filepath = "images/dice";

document.querySelector(".img1").setAttribute("src", filepath + randomNumber1 + ".png");
document.querySelector(".img2").setAttribute("src", filepath + randomNumber2 + ".png");

if(randomNumber1 > randomNumber2){
  document.querySelector(".container h1").innerHTML = "Player 1 Won";
}
else if(randomNumber1 < randomNumber2){
  document.querySelector(".container h1").innerHTML = "Player 2 Won";
}
else{
  document.querySelector(".container h1").innerHTML = "Draw";
}
