var rows = 10;
var cols = 10;

var bod = document.getElementsByTagName('body')[0];
var currentFrame = new board(cols, rows);
var p = new pallette();
var currentColor = 'purple';
var frame = 0;
var frames = [];

function next(){
    if(frame < frames.length - 1){
        currentFrame.updateTiles();
        delete frames[frame]
        frames[frame] = currentFrame.tiles;

        //if(frame < frames.length - 1)
            frame++;
        currentFrame.loadFrame(frames[frame]);
    }
}

function prev(){
    if(frame > 0){
        currentFrame.updateTiles();
        delete frames[frame]
        frames[frame] = currentFrame.tiles;

        frame--;
        currentFrame.loadFrame(frames[frame]);
    }
}

function newf(){
    currentFrame.updateTiles();
    frame++;
    frames.splice(frame, 0, currentFrame.tiles); 
    currentFrame.reloadBoard();
}

$(document).ready(function(){
    $(document).bind('keydown', function(e){
        if(e.keyCode == 32)
            newf();
    });
    $('#newFrame').click(newf);

    $(document).bind('keydown', function(e){
        if(e.keyCode == 65)
            prev();
    });
    $('#prevFrame').click(prev);

    $(document).bind('keydown', function(e){
        if(e.keyCode == 68)
            next();
    });
    $('#nextFrame').click(next);
});
