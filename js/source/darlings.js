function makeFiveDice(parent){
    for(var i = 0; i < 5; i++){
        var pips = pip(6);
        $(parent).append(makeDie("pictures/" + pips + ".png", parent, pips));
    }
}

//function roll(carried){
//    $("img:not(.carry)").each(function(){
//        var pips = pip(6);
//        $(this).attr('src', 'pictures/' + pips + '.png');
//    });
//}
