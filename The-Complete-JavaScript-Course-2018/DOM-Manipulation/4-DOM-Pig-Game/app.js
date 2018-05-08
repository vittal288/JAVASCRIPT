/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/


var scores, roundScore, activePlayer;

scores = [0, 0];
roundScore = 0;
activePlayer = 0;
// Math.random(), will give 0 to 1 with decimal 
// Math.floor(), will remove the decimal part of a number
// dice = Math.floor(Math.random() * 6) + 1;
// console.log(dice);

// document.querySelector('#current-' + activePlayer).textContent = dice;

// hide the dice onload 
document.querySelector('.dice').style.display = 'none';

//init the scores of players 
document.getElementById('score-0').textContent ='0';
document.getElementById('score-1').textContent ='0';
document.getElementById('current-0').textContent ='0';
document.getElementById('current-1').textContent ='0';

//roll the dice 
document.querySelector('.btn-roll').addEventListener('click', function () {
    //1. random number
    var dice = Math.floor(Math.random() * 6) + 1;

    // 2. Display the result 
    var diceDOM =  document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = './dice-' + dice + '.png';

    // 3. Update the round score IF the NUMBER was not 1
    if (dice !== 1) {
        roundScore = dice;
    } else {
        roundScore = 0;
    }
});

