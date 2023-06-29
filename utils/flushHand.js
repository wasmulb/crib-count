const deck = require('./deck');

starter = [c8];
hand = [c5, c4, c2, c3];
full = starter.concat(hand)

function flushHand() {
    let score = 0;
    if(starter[0].suit === hand[0].suit
        && hand[0].suit === hand[1].suit 
        && hand[1].suit === hand[2].suit
        &&  hand[2].suit === hand[3].suit
        ) {
        score += 5
        console.log(score)
        console.log('five card flush')
    } else if(
         hand[0].suit === hand[1].suit 
        && hand[1].suit === hand[2].suit
        &&  hand[2].suit === hand[3].suit
    ) { 
        score += 4
        console.log(score)
        console.log('four card flush')
     } else {
        console.log('no flush')
     }
    return score

}



flushHand();