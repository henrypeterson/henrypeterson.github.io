function tile(){
        this.color = 'grey';

        this.element = document.createElement('div');
        this.element.classList.add('box')
        this.element.style.backgroundColor = this.color;
}

tile.prototype.setColor = function(){
    this.color = 'yellow';
}
