var number = 49;
var colors = [ 'red', 'orange', 'yellow', 'green', 'blue', 'purple'];
var count = 0;
var currentColor = 'red'
var draw = false
document.addEventListener('mousedown', function(){draw = true;});
document.addEventListener('mouseup', function(){draw = false;});

var boxContainer = document.getElementById('boxContainer');

function setColor(event){
    if(draw)
        event.target.style.backgroundColor = currentColor; 
}

function setCurrentColor(target){
    currentColor = event.target.style.backgroundColor; 
}

function getColor(){
    var value = count;
    if(count == 5)
        count = 0;
    else
        count++;
    return colors[value];
}

function generateNewBox() {
    var boxElement = document.createElement('div');
    boxElement.classList.add('box');
    boxElement.style.backgroundColor = getColor();

    return boxElement;

}

function insertNewBox() {
    var newBoxElem = generateNewBox();
    newBoxElem.addEventListener('mouseover', setColor);
    boxContainer.appendChild(newBoxElem);
}

function makePallette(){
    for(var i = 0; i < 6; i++){
        var newBoxElem = generateNewBox();
        pallette.appendChild(newBoxElem);
        newBoxElem.addEventListener('click', setCurrentColor);

    }
}

makePallette();
for(var i = 0; i < number; i++){
    insertNewBox();
}

