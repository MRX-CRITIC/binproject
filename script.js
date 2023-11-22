"use strict";

const canvas = document.querySelector("#game");
const ctx = canvas.getContext("2d");
const headscore = document.querySelector(".score");
const name = document.querySelector(".name")
const basketimg = new Image();
const firstfoodimg = new Image();
const secondfoodimg = new Image();

basketimg.src = "./wicker-basket.png";
firstfoodimg.src = "./pineapple.png";
secondfoodimg.src = "./strawberry.png";

let box = 32;
let score = 0;

let food = {
    x: Math.floor(Math.random() * 19) * box,
    y: Math.floor(Math.random() * 19) * box
};

let basket = [];
basket[0] = {
    x: 9 * box
}
basket = canvas.width / 2
document.addEventListener("keydown", direction);
function direction(event){
    if (event.keyCode === 37){
        basket.x = basket.x - box
    }
    else if (event.keyCode === 39){
        basket.x = basket.x + box
    }
}
    function drawGame() {
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(basketimg, basket.x, 50);
}

let game = setInterval(drawGame, 100);