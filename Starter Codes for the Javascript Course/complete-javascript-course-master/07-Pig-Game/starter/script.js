'use strict';

const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const btnNew = document.querySelector('.btn--new');
let player0Total = document.querySelector('#score--0');
let player1Total = document.querySelector('#score--1');
let player0Current = document.querySelector('#current--0').value;
let player1Current = document.querySelector('#current--0');
let dice = document.querySelector('.dice');

const newGame = function() {
    player0Total.textContent = 0;
    player1Total.textContent = 0;
    player0Current.textContent = 0;
    player1Current.textContent = 0;
    dice.classList.add('hidden');
}

newGame();
console.log(btnRoll);
btnRoll.addEventListener('click',function() {
    const dice = Math.trunc(Math.random()*6+1);
    player1Current += dice;
    console.log(player1Current);
})