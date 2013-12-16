function roll(){
    //only roll if we haven't hit our maximum for this hand
    if(rolls < 3){
        $('#dice>.reporter').each(function(){
            $(this).removeClass('scored');
        });
        rolls++;
        if(rolls === 3){
            $('#dice>.reporter').each(function(){
                $(this).addClass('holding');
                $(this).attr('holding', 'true');
            });
        }
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
    var target = 1, sum = 0, upperScores = $('#scoring>.upper>.reporter');
    $('#hits>span').each(function(index){
        var hits = 0, iterator = 0;
        for(iterator; iterator < dice.length; iterator++){
            sum += dice[iterator].showing;
            if(dice[iterator].showing === target){
                hits++;
            }
        }
        $(this).text($(this).attr('id') + ': ' + hits);
        upperScorePreview(upperScores[index], hits);
        target++
    });
    $('#derived>span#sum').text($('#derived>span#sum').attr('id') + ': ' + sum/6);
    $('#derived>span#rolls').text($('#derived>span#rolls').attr('id') + ': ' + rolls);
    //sum up the scores in the upper table and add them to the net
    sum = 0;
    for(var element in upperScores){
        sum += parseInt( $(element).text().split(' ')[1] )
    }
    scorecard.upper.net = sum;
    $('#scoring>.upper>.derived').eq(0).text = $('#scoring>.upper>.derived').eq(0).attr('id') + ': ' + sum;
}

//fill in what score each box would score with the current dice
function upperScorePreview(element, hits){
    if($(element).attr('scored') === 'false'){
        //parse the pip count in the element to an integer, base 10
        var pips = parseInt($(element).attr('pips'),10)
        $(element).text($(element).attr('label') + ': ' + pips*hits);
    }
}

//make a selection of which box to score and make that permanent
function score(){
    $('#scoring>.upper>.holding').each(function(){
        var sheet = 'upper', score = parseInt( $(this).text().split(' ')[1] );
        rolls = 0;
        $(this).attr('scored', 'true');
        $(this).addClass('scored');
        scorecard[sheet][$(this).attr('label')] = score;
    });
    $('#dice>.reporter').each(function(){
        $(this).removeClass('holding');
        $(this).attr('holding', 'false');
    });
    $('#dice>.reporter').each(function(){
        $(this).addClass('scored');
    });
    meta();
}

function storeWindowSize(){
    windowSize['height'] = window.innerHeight;
    windowSize['width'] = window.innerWidth;
}

function initialize(){
    $('.reporter').each(function(){
        $(this).text($(this).attr('label') + ': ');    
    });
    $('#dice > .reporter').each(function(){
        dice.push(new Die(6, $(this)));
        $(this).attr('pips', '');
        $(this).text($(this).attr('id') + ': ' + $(this).attr('pips'));
        $(this).attr('holding', 'false');
    });
    $('#scoring>.upper>.reporter').each(function(){
        $(this).attr('scored', 'false');
    });
    scorecard = new Scorecard('USER');
}

initialize();
