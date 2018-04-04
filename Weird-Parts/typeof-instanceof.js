var a = 3;
console.log(typeof a); // number 

var b = 'Hello !';
console.log(typeof b); // string 

var c = {};
console.log(typeof c) // object 

var d =[];
console.log(typeof d) // object , this is weird 

console.log(Object.prototype.toString.call(d)) // better 


var Person = function(name){
    this.name = name;
}

var john = new Person();
console.log(typeof john);

console.log(john instanceof Person); // true 
// console.log(john2 instanceof Person);

console.log(typeof undefined); // make sense 
console.log(typeof null); // object 

var a = function (){ };
console.log(typeof a); // function 
