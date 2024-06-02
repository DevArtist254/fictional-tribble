const activeScore = document.querySelector(".score");
const hold = document.querySelector(".holdScoreGame");
const rollDice = document.querySelector(".rollDice");
const player1 = document.querySelector(".player1");
const player2 = document.querySelector(".player2");
const ps1 = document.querySelector(".player1Score");
const ps2 = document.querySelector(".player2Score");

const imgP1 = document.querySelector(".player1Dice");
const imgP2 = document.querySelector(".player2Dice");

const ps = {
  playerScore1: 0,
  playerScore2: 0,
  score: 0
};

rollDice.addEventListener("click", (e) => {
  e.preventDefault();
  let count = 0;
  
  if (generatesRanDiceRoll() !== 1) {

    count = generatesRanDiceRoll();
    ps.score += count;
    activeScore.innerHTML = ps.score;

    dice(count);
  } else {
    displayScore(ps.score);
    switchPlayer();
    ps.score = 0;
  }
})

hold.addEventListener("click", (e) => {
  e.preventDefault();
  displayScore(ps.score);
  switchPlayer();
  ps.score = 0;
})


function displayScore (score) {
  if (player1.classList.contains("active")) {
    ps.playerScore1 += score;
    ps1.innerHTML = ps.playerScore1;
  }
  if (player2.classList.contains("active")) {
    ps.playerScore2 += score;
    ps2.innerHTML = ps.playerScore2;
  }
}

function switchPlayer() {
    player1.classList.toggle("active");
    player2.classList.toggle("active");
}

function dice(count) {
  if (player1.classList.contains("active")) {
    imgP1.src = `./assests/dice-${count}.png`;
  } else if (player2.classList.contains("active")) {
    imgP2.src = `./assests/dice-${count}.png`;
  }
}

 function generatesRanDiceRoll() {
     return Math.floor(Math.random() * 6 + 1);;
}