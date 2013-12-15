$(document.body).on('click', '.dice', function(){
    $(this).addClass('carry');
})

$(document.body).on('click', '.carry', function(){
    $(this).removeClass('carry');
})

$("#roll").click(function(){
    $(document.head).html("<title>" + Math.random() + "</title>");
    //clear();
    roll($(".carry").size(), $('#table'));
    //gravity("#table");
    meta();
})

$("#gravity").click(function(){
	gravity("#table");
    setInterval(function(){generatePolls();},250);
})


$(document.body).on('click', '#table', function(){
	var test = $(this);
})

//$("#table").draggable();

$(document).ready(function(){
    storeWindowSize();
    resizeGame();
    makeFiveDice($("#game"));
    //$("div#game").draggable({axis:"x"});
    //$("div#game").draggable();
})

$(window).resize(function() {
    storeWindowSize();
    resizeGame();
});