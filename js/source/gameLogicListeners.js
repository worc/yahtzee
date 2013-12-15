$(document).ready(function(){
    
    function addLabels(){
        $('div#meta > span').each(function(){
            //var id = $(this).id();
            $(this).text($(this).attr('id') + ': ');
        });
    }
    
   $(window).keypress(function(event) {
        console.log(event);
        if(event.which === 114 || event.which === 82){
            //roll dice
            console.log("Rolling Dice");
            roll();
        }
   });
   
   
    
    addLabels();
});


