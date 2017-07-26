function pallette(){
    field.call(this);

    this.element = document.createElement('div'); 
    this.element.setAttribute('id', 'pallette');

    this.populate();
}

pallette.prototype = Object.create(field.prototype);

pallette.prototype.populate = function(){
    for(var i = 0; i < 6; i++){
        var newElem = this.addTile();
        this.element.appendChild(newElem);
        newElem = addEventListener('click', this.setCurrentColor);
    }
}
