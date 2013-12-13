var gravityOff = true, values = [], rolls = 0;

function roll(carried, parent){
    for(var i = carried; i < 5; i++){
        var pips = pip(6);
        $(parent).append(makeDie("pictures/" + pips + ".png", parent, pips));
    }
}

function makeDie(filename, container, pips){
    var img = new Image();
    $(img).attr('src', '' + filename).appendTo($(container));
    $(img).addClass('dice');
    $(img).attr('pips', pips);
    $(img).draggable({containment: "#game"});
    $(img).attr("z-index", "1");
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
            weight: 20, // Enter any number 1-100 ideally (25 is default), you can also use 'heavy' or 'light'
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