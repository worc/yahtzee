$(document).ready(function(){
    
    function addLabels(){
        $('div#meta > span').each(function(){
            //var id = $(this).id();
            $(this).text($(this).attr('id') + ': ');
        });
    }
    

    
    addLabels();
});

$(function() {
   $(window).keypress(function(e) {
       var ev = e || window.event;
       var key = ev.keyCode || ev.which;
       //do stuff with "key" here...
       var new_div = $('<div/>');
       new_div.hide();
       new_div.css('color', 'darkgreen');
       new_div.html('key code ' + key + ' was pressed!');      
       $('body').append(new_div);
       new_div.fadeIn();
   });
});
