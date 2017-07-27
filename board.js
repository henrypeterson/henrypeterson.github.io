function board(){
    field.call(this);
    this.draw = false;

    this.element = document.createElement('div');
    this.element.setAttribute('id', 'board');
}

board.prototype = Object.create(field.prototype);

board.prototype.populate = function(rows, cols){
    for(var i = 0; i < cols; i++){
        this.tiles.push([]);
        for(var j = 0; j < rows; j++){
            var newElem = this.addTile(); 
            this.tiles[i].push(newElem);
            this.element.appendChild(newElem.element);
        }
    }
    this.element.style.width = 22*this.tiles[0].length + 'px';
}

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

