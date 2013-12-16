function roll(){
    //only roll if we haven't hit our maximum for this hand
    if(rolls < 3){
        rolls++;
        for(var i = 0; i < dice.length; i++){
            var context = $(dice[i].reporter.context);
            if(dice[i].holding === false){
                dice[i].roll();        
            }
            context.attr('pips', "" + dice[i].showing + "");
            context.text(context.attr('id') + ': ' + context.attr('pips'));
        }
        meta();    
    }
}

//a function that updates the dice objects, called from a DOM event
function updateDiceHolding(){
    for(var i = 0; i <dice.length; i++){
        if($(dice[i].reporter).attr('holding') === 'true'){
            dice[i].holding = true;
        } else {
            dice[i].holding = false;
        }
    }
}

function meta(){
    var target = 1, sum = 0;
    $('#hits>span').each(function(){
        var hits = 0, iterator = 0;
        for(iterator; iterator < dice.length; iterator++){
            sum += dice[iterator].showing;
            if(dice[iterator].showing === target){
                hits++;
            }
        }
        $(this).text($(this).attr('id') + ': ' + hits);
        target++
    });
    $('#derived>span#sum').text($('#derived>span#sum').attr('id') + ': ' + sum/6);
    $('#derived>span#rolls').text($('#derived>span#rolls').attr('id') + ': ' + rolls);
}

function storeWindowSize(){
    windowSize['height'] = window.innerHeight;
    windowSize['width'] = window.innerWidth;
}

function initialize(){
    $('.reporter').each(function(){
        $(this).text($(this).attr('id') + ': ');    
    });
    $('#dice > .reporter').each(function(){
        dice.push(new Die(6, $(this)));
        $(this).text($(this).attr('id') + ': ' + $(this).attr('pips'));
        $(this).attr('holding', 'false');
    });
    scorecard = new Scorecard('USER');
}

initialize();
