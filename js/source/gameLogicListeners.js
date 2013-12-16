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
        if($(this).attr('holding') === 'true'){
            $(this).attr('holding', 'false');
            $(this).removeClass('holding');  
        } else {
            $(this).attr('holding', 'true'); 
            $(this).addClass('holding');  
        }
        updateDiceHolding();
    });

});


