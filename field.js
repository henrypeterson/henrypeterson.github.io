function field(){
    this.colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];
    this.tileCount = 0;
    this.tiles = [];
}

field.prototype.addTile = function(){
    var newTile = new tile();
    this.tileCount++;
    return newTile;
}

field.prototype.makeElement = function(name){
    this.element = document.getElementById(name);
}
