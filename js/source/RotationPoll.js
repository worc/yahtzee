var RotationPoll = function(element){
    var poll = {};
    poll['element'] = element;
    poll['matrix'] = matrixParser(element.css('-webkit-transform'));
    poll['rotation'] = Math.atan2(poll.matrix[1], poll.matrix[0]) * (180/Math.PI);
    poll.rotation = poll.rotation.toFixed(3);
    return poll;
}