var Die = function(sides, reporter){
    var die = {};
    die['sides'] = sides;
    die['showing'] = 0;
    die['holding'] = false;
    die['reporter'] = reporter;
    die['image'] = undefined;
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
