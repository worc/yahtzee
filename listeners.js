$(document.body).on('click', '.dice', function(){
    $(this).addClass('carry');
})

$(document.body).on('click', '.carry', function(){
    $(this).removeClass('carry');
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