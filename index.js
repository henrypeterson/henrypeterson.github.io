var rows         = 10;
var cols         = 10;
const up         = 1;
const down       = -1;

var bod          = document.getElementsByTagName('body')[0];
var currentFrame = new board(cols, rows);
var p            = new pallette();
var mode         = new state();

var currentColor = 'black';
var frame        = 0;
var frames       = [];


frames.push(currentFrame.tiles);

function changeFrame(value){
    currentFrame.updateTiles();
    delete frames[frame]
    frames[frame] = currentFrame.tiles;

    frame += value;
    currentFrame.loadFrame(frames[frame]);
}

function nextFrame(){
    if(frame < frames.length - 1)
        changeFrame(up);
    console.log(frames.length);
}

function prevFrame(){
    if(frame > 0)
        changeFrame(down);
    console.log(frames.length);
}

function newFrame(){
    currentFrame.updateTiles();
    frames.splice(frame, 0, currentFrame.tiles); 
    frame++;
    currentFrame.loadFrame(frames[frame - 1]);
    console.log(frames.length);
}

function delFrame(){
    frames.splice(frame - 1, 1);
}

function updateFrameCount(){
    $('#label').html((frame+1) + '/' + (frames.length));
}

function getFrameAsImage(){
    var image = currentFrame.renderCurrentFrame(15);
    $('#render').empty();
    $('#render').append(image);
}



$(document).ready(function(){
    $(document).bind('keydown', function(e){
        if(e.keyCode == 83) //s delete frame
            delFrame();
        else if(e.keyCode == 32)//space new frame
            newFrame();
        else if(e.keyCode == 80)//p render frame
            getFrameAsImage();
        else if(e.keyCode == 65)//a prev frame
            prevFrame();
        else if(e.keyCode == 68)//d next frame
            nextFrame();
        updateFrameCount();
    });
    $('#newFrame').click(newFrame);
    $('#prevFrame').click(prevFrame);
    $('#nextFrame').click(nextFrame);
    $('#select').click(mode.nextState);
});
