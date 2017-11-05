function tile(){
        this.color = 'grey';

        this.element = document.createElement('div');
        this.element.classList.add('box')
        this.element.style.backgroundColor = this.color;

        this.x = 0;
        this.y = 0;
}

tile.prototype.setColor = function(){
    this.color = 'yellow';
}

tile.prototype.getRed = function(){
    var full_string = window.getComputedStyle(this.element).getPropertyValue("background-color");
    return full_string.split(/\D/g)[4];
}

tile.prototype.getGreen = function(){
    var full_string = window.getComputedStyle(this.element).getPropertyValue("background-color");
    return full_string.split(/\D/g)[6];
}

tile.prototype.getBlue = function(){
    var full_string = window.getComputedStyle(this.element).getPropertyValue("background-color");
    return full_string.split(/\D/g)[8];
}
