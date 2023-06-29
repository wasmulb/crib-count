const deck = require('./deck');

starter = [h5];
hand = [c5, d5, ha, hj];
full = starter.concat(hand)

console.log(hand[3].rank)

function rightJack() {
    let score = 0;
    for (let i = 0; i < full.length; i++){
        if (hand[i].suit === starter.suit){
            console.log('right jack!')
            score += 1
            console.log(score)
        }
    }
    return score;
}


 rightJack();
  