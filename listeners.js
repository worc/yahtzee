$(document.body).on('click', '.dice', function(){
    $(this).addClass('carry');
})

$(document.body).on('click', '.carry', function(){
    $(this).removeClass('carry');
})

$(document.body).on('click', 'img', function(){
    var test = rotationPolling($(this));

    console.log( Math.round(Math.atan2(test[1], test[0]) * (180/Math.PI)) );
    console.log(Math.round(Math.asin(test[1]) * (180/Math.PI)));
})

$("#roll").click(function(){
    $(document.head).html("<title>" + Math.random() + "</title>");
    clear();
    roll($(".carry").size(), $('#table'));
    //gravity("#table");
    meta();
})

$("#gravity").click(function(){
	gravity("#table");
})


$(document.body).on('click', '#table', function(){
	var test = $(this);
})

//$("#table").draggable();

$(document).ready(function(){
    //$("div#game").draggable({axis:"x"});
    //$("div#game").draggable();


})