var randomNumber1=Math.floor((Math.random()*6))+1;
var randomNumber2=Math.floor((Math.random()*6))+1;
console.log(randomNumber1);
var randomDiceImage1=("/images/dice"+randomNumber1+".png");
console.log(randomDiceImage1);
var randomDiceImage2=("/images/dice"+randomNumber2+".png");
console.log(randomDiceImage2);
document.querySelectorAll("img")[0].setAttribute("src", randomDiceImage1);
document.querySelectorAll("img")[1].setAttribute("src", randomDiceImage2);

if(randomDiceImage1>randomDiceImage2) {
    document.querySelectorAll("h1")[0].innerHTML="Player 1 WIN!";
}
else if(randomDiceImage1<randomDiceImage2) {
    document.querySelectorAll("h1")[0].innerHTML="Player 2 WIN!";
}
else if(randomDiceImage1===randomDiceImage2){
    document.querySelectorAll("h1")[0].innerHTML="Draw";
}
const refreshButton = document.querySelector('.refresh-button');

const refreshPage = () => {
    location.reload();
}

refreshButton.addEventListener('click', refreshPage)