const deck = require('./deck');

starter = [h5];
hand = [h6, h7, h8, h9];
full = starter.concat(hand)

function flushCrib() {
    let score = 0;
    if(starter[0].suit === hand[0].suit
        && hand[0].suit === hand[1].suit 
        && hand[1].suit === hand[2].suit
        &&  hand[2].suit === hand[3].suit
        ) {
        score += 5
        console.log(score)
        console.log('flush')
    } else { 
        console.log('no flush')
     }
    return score
}



flushCrib();