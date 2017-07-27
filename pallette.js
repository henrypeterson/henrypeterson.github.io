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
    }
}

$(document).ready(function(){
    $("#pallette .box").click(function(){
        currentColor = $(this).css('background-color');
    });
});
