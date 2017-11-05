function state(){
    this.states = ['draw', 'select', 'paste'];
    this.index = 0;
    this.currentState = this.states[this.index];
}

state.prototype.nextState = function(){
    console.log(typeof this.states);
//    //if(this.index == this.states.length - 1)
//    if(this.index == 2)
//        this.index = 0;
//    else
//        this.index++;
//    this.currentState = this.states[this.index];
//    this.setHandlers();
}
/*
state.prototype.prevState = function(){
    if(this.index == 0)
        this.index = this.states.length - 1;
    else
        this.index--;
    this.currentState = this.states[this.index];
    this.setHandlers();
}
*/
state.prototype.setHandlers = function(){
    if(currentState == 'draw')
        this.setDrawHandlers();
    if(currentState == 'select')
        this.setSelectHandlers();
    if(currentState == 'paste')
        this.setPasteHandlers();
}

state.prototype.setDrawHandlers = function(){
    $(document).ready(function(){
        $("#board .box").mousemove(function(e){
            if(e.buttons == 1){
                $(this).css('background-color', currentColor);
            }
        });
        $("#board .box").click(function(e){
            $(this).css('background-color', currentColor);
        });
    });
}

function getCoord(box, value){
    if(box.count == 0){
        box.x1 = value % 10;
        box.y2 = Math.floor(value / 10);
    }
}


state.prototype.setSelectHandlers = function(){
    alert("here");
    var box = {x1:0, y1:0, x2:0, y2:0, count:0}
    $(document).ready(function(){
        $("#board .box").click(function(e){
            if(e.buttons == 1){
                getCoord(box, $(this).index());
            }
        });
    });
}



