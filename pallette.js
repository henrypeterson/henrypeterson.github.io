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
        newElem.element.style.backgroundColor = this.colors[i];
        this.element.appendChild(newElem.element);
        newElem.element.addEventListener('click', function(){ 
            currentColor = event.target.style.backgroundColor;
        });
    }
}
