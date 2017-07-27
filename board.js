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
        });
        $("#board .box").click(function(e){
            $(this).css('background-color', currentColor);
        });
    });
}
