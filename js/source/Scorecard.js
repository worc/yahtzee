var Scorecard = function(name){

    scorecard = {};

    scorecard.player = name;

    scorecard.upper = {
        'aces'      : 0,
        'twos'      : 0,
        'threes'    : 0,
        'fours'     : 0,
        'fives'     : 0,
        'sixes'     : 0,
        'net'       : 0,
        'bonus'     : 0,
        'grand'     : 0,
    };
    scorecard.lower = {
        'trips'     : 0,
        'quads'     : 0,
        'house'     : 0,
        'small'     : 0,
        'large'     : 0,
        'yahtzee'   : 0,
        'chance'    : 0,
        'bonuses'   : 0,
        'bonus'     : 0,
        'net'       : 0,
        'upper'     : 0,
        'grand'     : 0,
    };   

    return scorecard;
}
