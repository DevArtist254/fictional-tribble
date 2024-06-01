///////////////////////////////////////////////
//User rolls dice

/**
 * Generates random dice roll
 * Display dice roll 
 * if its 1 switch switch player
 * add dice roll to the score board and the player can go again
 */

const player1 = {
    score: 0,
    isActive: false
};

const player2 = {
    score: 0,
    isActive: false
};


function generatesRanDiceRoll() {
    return Math.floor(Math.random() * 6 + 1);;
}

if (generatesRanDiceRoll() !== 1) {
    player1.score += generatesRanDiceRoll();   
    console.log(player1.score);
} else {
    console.log("Players current score: " + player1.score);
    console.log("Switch player");
}
