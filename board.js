function board(){
    field.call(this);
    this.draw = false;

    this.element = document.createElement('div');
    this.element.setAttribute('id', 'board');
}

board.prototype = Object.create(field.prototype);
/*
board.prototype.setColor = function(event){

}
*/

board.prototype.populate = function(rows, cols){
    for(var i = 0; i < cols; i++){

        this.tiles.push([]);

        for(var j = 0; j < rows; j++){
            
            var newElem = this.addTile(); 
            this.tiles[i].push(newElem);
            this.element.appendChild(newElem.element);
            newElem.element.addEventListener('click', function(){
                event.target.style.backgroundColor = currentColor;
                newElem.setColor(currentColor);
            });

        }
    }

    this.element.style.width = 22*this.tiles[0].length + 'px';

}
