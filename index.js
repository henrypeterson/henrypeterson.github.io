var rows = 3;
var cols = 3;

var bod = document.getElementsByTagName('body')[0];
var currentFrame = new board(cols, rows);
var p = new pallette();
var currentColor = 'purple';
var frame = 0;
var frames = [];

$(document).ready(function(){
    $('#newFrame').click(function(){
        currentFrame.updateTiles();
        frames.push(currentFrame.tiles); 
        frame++;
        currentFrame.reloadBoard();
    });
});

$(document).ready(function(){
    $('#prevFrame').click(function(){
        if(frame > 0){
            currentFrame.updateTiles();
            delete frames[frame]
            frames[frame] = currentFrame.tiles;

            frame--;
            currentFrame.loadFrame(frames[frame]);
        }
    });
});

$(document).ready(function(){
    $('#nextFrame').click(function(){
        if(frame < frames.length){
            currentFrame.updateTiles();
            delete frames[frame]
            frames[frame] = currentFrame.tiles;

            if(frame < frames.length - 1)
                frame++;
            currentFrame.loadFrame(frames[frame]);
        }
    });
});
