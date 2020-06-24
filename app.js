var scores,roundScore,activePlayer,gamePlaying;
init();
var rolldice = document.querySelector('.btn-roll');
rolldice.addEventListener('click',function () {
    if(gamePlaying) {
        var randomDice = Math.floor(Math.random() * 6) + 1;
        var dice = document.querySelector('.dice');
        dice.src = 'dice-' + randomDice + '.png';
        dice.style.display = 'block';
        if (randomDice !== 1) {
            roundScore += randomDice;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        } else {
            nextPlayer();
        }
    }
});

   document.querySelector('.btn-hold').addEventListener('click',function(){
       if(gamePlaying) {
           scores[activePlayer] += roundScore;
           document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

           if (scores[activePlayer] >= 10) {
               document.getElementById('name-' + activePlayer).textContent = "Winner!";
               document.querySelector('.dice').style.display = 'none';
               // document.querySelector('.btn-roll').setAttribute('disabled','disabled');
               // document.querySelector('.btn-hold').setAttribute('disabled','disabled');
               document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
               document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
               gamePlaying = false;
           } else {
               //Next Player
               nextPlayer();
           }
       }
   scores[activePlayer] += roundScore;
   document.querySelector('#score-'+activePlayer).textContent = scores[activePlayer];

    if(scores[activePlayer] >= 10)
    {
        document.getElementById('name-'+activePlayer).textContent = "Winner!";
        document.querySelector('.dice').style.display = 'none';
        document.querySelector('.btn-roll').setAttribute('disabled','disabled');
        document.querySelector('.btn-hold').setAttribute('disabled','disabled');
        document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
        document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
    }else{
        //Next Player
        nextPlayer();
    }
});
function nextPlayer() {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    document.querySelector('.dice').style.display = 'none';
}

document.querySelector('.btn-new').addEventListener('click',init);

function  init() {
    scores = [0,0];
    roundScore = 0;
    activePlayer = 0;
    gamePlaying = true;
    document.getElementById('score-0').textContent = "0";
    document.getElementById('score-1').textContent = "0";
    document.getElementById('current-0').textContent = "0";
    document.getElementById('current-1').textContent = "0";
    document.querySelector('.dice').style.display = 'none';
    document.getElementById('name-0').textContent = "Player 1";
    document.getElementById('name-1').textContent = "Player 2";
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
    // document.querySelector('.btn-roll').removeAttribute('disabled');
    // document.querySelector('.btn-hold').removeAttribute('disabled');
    document.querySelector('.btn-roll').removeAttribute('disabled');
    document.querySelector('.btn-hold').removeAttribute('disabled');
}