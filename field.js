function field(){
    this.colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];
    this.tileCount = 0;
    this.tiles = [];
    this.currentColor = 'red';
}

field.prototype.addTile = function(){
    var newTile = new tile();
    this.tileCount++;
    return newTile.element;
}

