/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var score,roundScore,player,isPlaying;

init();

function init(){
    score=[0,0];
    roundScore=0;
    player=0;//First player.For second player value =1
    isPlaying=true;

    document.querySelector('.dice').style.display='none';
    document.getElementById('score-0').textContent='0';
    document.getElementById('score-1').textContent='0';
    document.getElementById('current-0').textContent='0';
    document.getElementById('current-1').textContent='0';
    document.getElementById('name-0').textContent='Player 1';
    document.getElementById('name-1').textContent='Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
    document.querySelector('.player-1-panel').classList.remove('active');

}

function changePlayer(){
        roundScore=0;
        document.getElementById('current-'+player).textContent=roundScore;
        document.querySelector('.player-0-panel').classList.toggle('active');
        player===0?player=1:player=0;
        document.querySelector('.player-1-panel').classList.toggle('active');
        document.querySelector('.dice').style.display='none';
    
}


document.querySelector('.btn-roll').addEventListener('click',function(){
   if(isPlaying){
        var diceValue=Math.floor(Math.random()*6)+1;
        var diceObject=document.querySelector('.dice');
        diceObject.style.display='block';
        diceObject.src="dice-"+diceValue+'.png';
        if(diceValue===1){
            changePlayer();
        }
        else{
            roundScore+=diceValue;
            document.getElementById('current-'+player).textContent=roundScore;
    }
    
       
   }    
});

document.querySelector('.btn-hold').addEventListener('click',function(){
   if(isPlaying){
        score[player]+=roundScore;

        document.querySelector('#score-'+player).textContent=score[player];

        if(score[player]>=100){
            document.getElementById('name-'+player).textContent='Winner!';
            document.querySelector('.player-'+player+'-panel').classList.remove('active');
            document.querySelector('.player-'+player+'-panel').classList.add('winner');
            document.querySelector('.dice').style.display='none';
            isPlaying=false;
        }else{
             changePlayer();
        }
   }
});

document.querySelector('.btn-new').addEventListener('click',init);




