var scores, roundScore, activePlayer,gameOn = true, lastDice;
init();
//initially dice shouldnot be seen
document.querySelector('.dice').style.display = 'none';

//initializing the score boards to zero
document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';

//making the dice work dynamically
document.querySelector('.btn-roll').addEventListener('click', function(){
    if(gameOn){
            var dice =  Math.floor(Math.random() * 6) + 1;
            var diceDOM = document.querySelector('.dice');
            diceDOM.style.display = 'block';
            diceDOM.src = 'dice-' + dice + '.png';

            if(dice === 6 && lastDice ===6)
            {
                scores[activePlayer] = 0;
                document.querySelector('score-' +activePlayer).textContent = '0';
                nextPlayer();
            }
             
            else if(dice !== 4)
            {
                roundScore += dice;
                document.querySelector('#current-' +activePlayer).textContent = roundScore;
        
            }
            else
            {
                nextPlayer();
            }
            lastDice = dice;

        }
});

//making the hold dynamic
document.querySelector('.btn-hold').addEventListener('click', function(){
    //updating the player scores by adding round(current) scores
    scores[activePlayer] += roundScore;
    //not starting from zero, but adding on (updating)
    document.querySelector('#score-' +activePlayer).textContent = scores[activePlayer];
    
    //winner
    if(scores[activePlayer] >= 100)
    {
        document.querySelector('#name-' +activePlayer).textContent = 'WINNER!';
        document.querySelector('.dice').style.display = 'none';
        document.querySelector('.player-' +activePlayer+ '-panel').classList.add('winner');
        document.querySelector('.player-' +activePlayer+ '-panel').classList.remove('active');
        gameOn = false;

    }else{
    //because we want the action on switching of player
    nextPlayer();
    }
});

//switching of layers
function nextPlayer(){
//ternarry operator
activePlayer === 0 ? activePlayer = 1 : activePlayer = 0 ; 
//initializing to zero on switch
roundScore = 0;

document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';
document.querySelector('.player-0-panel').classList.toggle('active');
document.querySelector('.player-1-panel').classList.toggle('active');
document.querySelector('.dice').style.display = 'none';
}

//making play new dynamic
document.querySelector('.btn-new').addEventListener('click', function(){
    //initializing
    init();
    });

    //initialising everythis as begining
function init()
{
    scores = [0,0];
    activePlayer = 0;
    roundScore = 0;

document.querySelector('.dice').style.display = 'none';

document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';
document.getElementById('name-0').textContent = 'Player 1';
document.getElementById('name-1').textContent = 'Player 2';
document.querySelector('.player-' +activePlayer+ '-panel').classList.remove('winner');
document.querySelector('.player-' +activePlayer+ '-panel').classList.add('active');
document.querySelector('.dice').style.display = 'none';


}


//dice = Math.floor(Math.random()*6) + 1;
//document.querySelector('#current-' +activePlayer).textContent = dice;

