function board(){
    field.call(this);
    this.draw = false;

    this.element = document.createElement('div');
    this.element.setAttribute('id', 'board');
}

board.prototype = Object.create(field.prototype);

board.prototype.setCurrentColor = function(){
    this.currentColor = 'green';
}

board.prototype.populate = function(rows, cols){
    for(var i = 0; i < cols; i++){
        this.tiles.push( [] );
        for(var j = 0; j < rows; j++){
            var newElem = this.addTile(); 
            this.tiles[i].push(newElem);
            this.element.appendChild(newElem);
        }
    }
    this.element.style.width = 22*this.tiles[0].length + 'px';
}
