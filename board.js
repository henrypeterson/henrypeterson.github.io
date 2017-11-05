function board(cols, rows){
    field.call(this);
    this.makeElement('board');

    this.cols = cols;
    this.rows = rows;

    this.populate();
    this.setHandlers();
}

board.prototype = Object.create(field.prototype);

board.prototype.updateTiles = function(){
    var boardColors = [];
    $("#board .box").map(function(){
        boardColors.push($(this));
    });
    var k = 0;
    for(var i = 0; i < this.cols; i++){
        for(var j = 0; j < this.rows; j++){
            this.tiles[i][j].color = boardColors[k].css('background-color');
            k++;
        }
    }
}

board.prototype.loadFrame = function(frame){
    this.reloadBoard();
    for(var i = 0; i < this.cols; i++){
        for(var j = 0; j < this.rows; j++){
            this.tiles[i][j].element.style.backgroundColor = frame[i][j].color;
        }
    }
}

board.prototype.reloadBoard = function(){
    $('#board').empty();
    this.tiles = [];
    this.populate();
    this.setHandlers();
}

board.prototype.populate = function(){
    for(var i = 0; i < this.cols; i++){
        this.tiles.push([]);
        for(var j = 0; j < this.rows; j++){
            var newElem = this.addTile(); 
            this.tiles[i].push(newElem);
            this.element.appendChild(newElem.element);
            this.tiles[i][j].x = i;
            this.tiles[i][j].y = j;
        }
    }
    this.element.style.width = 22*this.tiles[0].length + 'px';
}

board.prototype.setHandlers = function(){
    $(document).ready(function(){
        $("#board .box").mousemove(function(e){
            if(e.buttons == 1){
                $(this).css('background-color', currentColor);
            }
//            var x = $(this).index() % 10;
//            var y = Math.floor($(this).index() / 10);
//            console.log(x,y);
        });
        $("#board .box").click(function(e){
            $(this).css('background-color', currentColor);
        });
    });
}

board.prototype.scaleArray = function(scale){
    var scaled_cols = [];
    for(var i = 0; i < this.cols * scale; i++){
        var scaled_row = [];
        for(var j = 0; j < this.rows * scale; j++){
            scaled_row.push(this.tiles[Math.floor(i/scale)][Math.floor(j/scale)]);
        }
        scaled_cols.push(scaled_row);
    }
    return scaled_cols;
}

board.prototype.renderCurrentFrame = function(scale){
    var canvas = document.createElement('canvas');
    var scaleCols = this.cols * scale;
    var scaleRows = this.rows * scale;
    canvas.width = scaleCols;
    canvas.height = scaleRows;
    var context = canvas.getContext('2d');
    var ImgData = context.createImageData(scaleCols, scaleRows);
    var data = ImgData.data;
    
    var arr = this.scaleArray(scale);
    var result = []
    for(var i = 0; i < scaleCols; i++){
        result = result.concat(arr[i]);
    }

    var j = 0;
    for(var i = 0; i < data.length; i+=4){
            data[i + 0] = result[j].getRed();
            data[i + 1] = result[j].getGreen();
            data[i + 2] = result[j].getBlue();
            data[i + 3] = 255;
        j++;
    }

    context.putImageData(ImgData, 0, 0);
    /*
    var image = new Image();
    image.src = canvas.toDataURL();
    return image;
    */
    return context;
}
