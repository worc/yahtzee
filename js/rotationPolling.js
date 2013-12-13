//given an element to poll
//maintain an object representation of that element
//poll the object
//
//that object is that element's selector, and its old webkit-rotation, and a new webkit-rotation,
//if the webkit-rotation has changed more than a certain threshold return a boolean indicating that the element is in rotation



function rotationPolling(element){
    var isChangingLots = false, interval = 250, poll = {};
    poll.element = element;
    poll.rotation = matrixParser(element.css('-webkit-transform'));
    return poll.rotation;
    //return isChangingLots;
}