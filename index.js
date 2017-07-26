var bod = document.getElementsByTagName('body')[0];
var b = new board();
var p = new pallette();

bod.appendChild(b.element);
bod.appendChild(p.element);

b.populate(5, 5);
