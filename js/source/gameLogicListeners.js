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
   
    //checkbox behavior for dice, we can pick multiple dice
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
    
    
    //radio button behavior for scoring, since we can only score one box at a time
    //and no selected already scored fields
    $('#scoring>.upper').on('click', '.reporter', function(){
        if($(this).attr('scored') === 'false'){
            if($(this).attr('holding') === 'true'){
                $(this).attr('holding', 'false');
                $(this).removeClass('holding');  
            } else {
                $(this).attr('holding', 'true'); 
                $(this).addClass('holding');
                $('#scoring>.upper>.reporter').not($(this)).each(function(){
                    $(this).attr('holding', 'false');
                    $(this).removeClass('holding');  
                })
            }
        }
        updateDiceHolding();
    }); 


});
