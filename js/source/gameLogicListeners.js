$(document).ready(function(){
        
   $(window).keypress(function(event) {
        console.log(event);
        if(event.which === 114 || event.which === 82){
            //roll dice
            console.log("Rolling Dice");
            roll();
        }
   });
   
    
    $('#dice').on('click', '.reporter', function(){
        $(this).addClass('hold');    
    });
        
    $('#dice').on('click', '.hold', function(){
        $(this).removeClass('hold');    
    });

});


