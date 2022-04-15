'use strict';

const btn = document.querySelectorAll(".button-option");
const popup = document.querySelector(".popup");
const newgameBtn = document.querySelector(".new-game");
const restartBtn = document.querySelector(".restart");
const msg = document.querySelector(".message");
const winCombination = [[0, 1, 2],
[0, 3, 6],
[2, 5, 8],
[6, 7, 8],
[3, 4, 5],
[1, 4, 7],
[0, 4, 8],
[2, 4, 6],
];

let xTurn = true;
let count = 0;

const winFunction = function(letter){
    btn.forEach(el=> el.disabled = true);
    popup.classList.remove('hide');
    if (letter == "X") {
        msg.innerHTML = "&#x1F389; <br> 'X' Wins";
      } else {
        msg.innerHTML = "&#x1F389; <br> 'O' Wins";
      }
}

const enableButtons = function(){
    count = 0;
    btn.forEach(el => {
        el.innerHTML = '';
        el.disabled = false;
    });
}

const drawFunction = function(){
    btn.forEach((element) => (element.disabled = true));
    popup.classList.remove("hide");
    msg.innerHTML = "&#x1F60E; <br> It's a Draw";
};

newgameBtn.addEventListener('click',function(){
    popup.classList.add('hide');
    enableButtons();
});

restartBtn.addEventListener('click', function(){
enableButtons();
});


const winChecker = function(){
winCombination.forEach((el)=>{
    let [el1,el2,el3] = [btn[el[0]].innerHTML,btn[el[1]].innerHTML,btn[el[2]].innerHTML];
    if ((el1 !== '') && (el2 !== '') && (el3 !== '')){
        if((el1 === el2)  && (el2=== el3)){
            winFunction(el1);
        }

    } 
})
};

btn.forEach(el=> el.addEventListener('click',function(){
if (xTurn){
    xTurn = false;
    el.innerHTML = `X`;
    el.disabled = true;
}
else{
    xTurn=true;
    el.innerHTML = `O`;
    el.disabled = true;
}

count++;
if(count ===9){
    drawFunction();
}
winChecker();
}));
window.onload = enableButtons;