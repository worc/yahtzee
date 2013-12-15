var Die = function(){
    var die = {};
    die['sides'] = 0;
    die['showing'] = 0;
    die['holding'] = false;
    die['roll'] = function(){
        var random = Math.random(), i = 1;
        while(i <= die.sides){
            if(random < i/die.sides){
                die.showing = i;
                break;
            }
            i++;
        }
    }
    return die
}
