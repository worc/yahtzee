//given an element to poll
//maintain an object representation of that element
//poll the object
//
//that object is that element's selector, and its old webkit-rotation, and a new webkit-rotation,
//if the webkit-rotation has changed more than a certain threshold return a boolean indicating that the element is in rotation



function rotationPolling(oldPoll){
    var element, rotation, isChangingLots = false, interval = 250, newPoll = {};

    newPoll.element = oldPoll.element;
    newPoll.rotationMatrix = matrixParser(element.css('-webkit-transform'));

    poll.element = element;

    return poll.rotation;
    //return isChangingLots;
}



//no sanity checking here other than looking for a number
    //should also have integer check
    //and then also a maximum or minimum to ensure some kind of performance
    if(typeof interval != "number"){
        this.interval = 100;
    } else {
        this.interval = interval;
