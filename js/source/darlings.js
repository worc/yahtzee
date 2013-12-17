function makeDice(parent, amount){
    for(var i = 0; i < amount; i++){
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

function gravity(container){
    if(gravityOff){
        $(container).jGravity({ // jGravity works best when targeting the body
            target: '*', // Enter your target critera e.g. 'div, p, span', 'h2' or 'div#specificDiv', or even 'everything' to target everything in the body
            ignoreClass: 'ignoreGravity', // Specify if you would like to use an ignore class, and then specify the class
            weight: 25, // Enter any number 1-100 ideally (25 is default), you can also use 'heavy' or 'light'
            depth: 1, // Enter a value between 1-10 ideally (1 is default), this is used to prevent targeting structural divs or other items which may break layout in jGravity
            drag: true // Decide if users can drag elements which have been affected by jGravity
        });
        gravityOff = false;
    }
}

function pip(number){
    var random = Math.random(), i = 1;
    while(i <= number){
        if(random < i/number){
            return i;
        }
        i++;
    }
}

function makeDie(filename, container, pips){
    var img = new Image();
    $(img).attr('src', '' + filename).appendTo($(container));
    $(img).addClass('dice');
    $(img).attr('pips', pips);
    //$(img).draggable({containment: "#table"});
    $(img).attr("z-index", "1");
    $(img).css('-webkit-transform', 'rotate(0.0deg');
    //{ connectToSortable: "#dice-list" })

    return img;
}

function generatePolls(){

    var snapshot = new Array();

    //only maintain five poll arrays in the history
    if(polls.length === 5){
        polls = polls.splice(1,4);
    }
    $("img.dice").each(function(index){
        snapshot[index] = new RotationPoll($(this));
    });

    //finally, save the snapshot to the polls
    polls[polls.length] = [];
    polls[polls.length-1] = snapshot;

    //console.log(polls[0][0].rotation);

    //only do a reroll if we have enough history
    if(polls.length === 5){
        reroll();
    }
}

function reroll(){
    var dice = 0;
    while(dice < diceCount){
        var snapshots = 0, history = [], deviation = 0, element=polls[0][dice].element;
        while(snapshots < 5){
            history.push(polls[snapshots][dice].rotation);
            snapshots++;
        }
        //TODO change this to standard deviation
        if(Math.abs(history[4] - history[3]) > threshold){
            var pips = pip(6);
            element.attr('src', 'pictures/' + pips + '.png');
        }
        dice++;
    }
}

function resizeGame(){
    $("#game").css('height', windowSize.height);
    $("#game").css('width', windowSize.width);
}
