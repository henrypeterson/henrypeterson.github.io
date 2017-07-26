function tile(){
        this.color = 'gray';

        this.element = document.createElement('div');
        this.element.classList.add('box')
        this.element.style.backgroundColor = this.color;
}
