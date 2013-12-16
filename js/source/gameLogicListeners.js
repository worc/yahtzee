$(document).ready(function(){
   
   //the r or R keypress to roll     
    $(window).keypress(function(event) {
        console.log(event);
        if(event.which === 114 || event.which === 82){
            //roll dice
            console.log("Rolling Dice");
            roll();
        }
    });
  
   //the s or S keypress to score
    $(window).keypress(function(event) {
        console.log(event);
        if(event.which === 115 || event.which === 83){
            console.log("Scoring");
            score();
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


