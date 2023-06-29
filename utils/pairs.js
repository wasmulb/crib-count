const deck = require('./deck');

starter = [h5];
hand = [c5, d5, ha, da];
full = starter.concat(hand)

function pairs() {
    let score = 0;
    for (let i = 0; i < full.length; i++) {
        for (let j = i + 1; j < full.length; j++) {
            if (full[i].rank === full[j].rank) {
                score += 2
                console.log(score)
            }
        }
    }
    return score;
}



pairs();

