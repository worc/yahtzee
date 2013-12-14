function makeFiveDice(parent){
    for(var i = 0; i < 5; i++){
        var pips = pip(6);
        $(parent).append(makeDie("pictures/" + pips + ".png", parent, pips));
    }
}

function roll(carried){
    $("img:not(.carry)").each(function(){
        var pips = pip(6);
        $(this).attr('src', 'pictures/' + pips + '.png');
    });
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

function pip(sides){
    var random = Math.random(), i = 1;
    for(i; i <= sides; i ++){
        if(random < i/sides){
            return i;
        }
    }
}

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

function clear(){
    $("img:not(.carry)").remove();
}

function meta(){
    var spans = $(".returned"), i = 1, text = "";
    for(i; i<=6; i++){
        text = i + " Hits: " + $('img[pips="' + i + '"]').length;
        values[i] = $('img[pips="' + i + '"]').length;
        $(spans[i-1]).text(text);
    }
}

function generatePolls(){

    //only maintain five poll arrays in the history
    if(polls.length === 5){
        polls.shift();
    }
    //snap shot is one moment for each die
    snapshot.splice(0,snapshot.length);
    $("img.dice").each(function(){
        snapshot.push(new RotationPoll($(this)));
    });

    //finally, save the snapshot to the polls
    polls.push(snapshot);

    console.log(polls[0][0].rotation);

    //only do a reroll if we have enough history
    if(polls.length === 5){
        reroll();
    }
}
function storeWindowSize(){
    windowSize['height'] = window.innerHeight;
    windowSize['width'] = window.innerWidth;
}
function resizeGame(){
    $("#game").css('height', windowSize.height);
    $("#game").css('width', windowSize.width);
}

function reroll(){
    var dice = 0;
    while(dice < 5){
        var snapshots = 0, history = [], deviation = 0, element=polls[0][dice].element;
        while(snapshots < 5){
            history.push(polls[snapshots][dice].rotation);
            snapshots++;
        }
        //TODO change this to standard deviation
        if(Math.abs(history[4] - history[0]) > 5){
            var pips = pip(6);
            element.attr('src', 'pictures/' + pips + '.png');
        }
        dice++;
    }
}
//if a dice has the same rotation three polls in row
//lock that die down as that number
//else
//roll a new number for that die.