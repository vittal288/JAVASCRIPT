// PROTOTYPE INHERITANCE 
function Shape(){
    this.area=function(){
        return "You Need to implement this !!!";
    }
    this.something = 'I am From SUPER Class';
    var privateMember = 'Private Member !';
}


function Square(length){
    this.length = length;    
    this.area = function(){
        return this.length * this.length;
    }
}


function Rectangle(height,width){
    this.height = height;
    this.width = width;
}

Square.prototype = new Shape();
Rectangle.prototype = new Shape();


var sq = new Square(2);
console.log('SQ AREA', sq.area());

var rect = new Rectangle(2,3);
console.log('REACT AREA',rect.area());
console.log('Accessing Super Class Properties', rect.something);
console.log('Accessing PRIVATE Member from super class', rect.privateMember);