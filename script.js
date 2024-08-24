let user=0;
let comp=0;
document.getElementById("computer-score").innerText=comp;
document.getElementById("user-score").innerText=user;

document.getElementById('next').style.visibility = 'hidden';

function playGame(playerChoice) {
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * 3)];

    document.getElementById('game-interface').style.display = 'none';
    document.getElementById('result-screen').style.display = 'flex';

    document.getElementById('player-img').src = `${playerChoice}.png`;
    document.getElementById('computer-img').src = `${computerChoice}.png`;

    let result = '';

    if (playerChoice === computerChoice) {
        result = "TIE UP";
        document.getElementById("play").innerText="REPLAY";
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        result = 'YOU WIN AGAINST PC';
        user++;
    } else {
        result = 'YOU LOST AGAINST PC';
        comp++;
    }

    document.getElementById('result-text').innerText = result;
    document.getElementById("computer-score").innerText=comp;
    document.getElementById("user-score").innerText=user;
    if(user>comp){
        document.getElementById('next').style.visibility = 'visible';
    }
}




function playAgain() {
    document.getElementById('game-interface').style.display = 'flex';
    document.getElementById('result-screen').style.display = 'none';
}
function showRules(){
    var node = document.getElementById('rules');
    node.style.visibility = 'visible';
}

function closeRules(){
    var node = document.getElementById('rules');
    node.style.visibility = 'hidden';
}


