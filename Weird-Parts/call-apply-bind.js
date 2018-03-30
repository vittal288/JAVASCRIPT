// call(),bind() and apply() are accessable from any function object 

var person ={
    firstname:'vittal',
    lastname:'kamkar',
    getFullName: function(){
        var fullName = this.firstname+'  '+this.lastname;
        return fullName;
    }
}


var logName = function(lang1,lang2){
    console.log('THIS', this);
    console.log('Logged '+ this.getFullName());
    console.log('LANG1', lang1,' LANG2', lang2);
    console.log('---------------');
}
// logName();
// in above logName function, this will point to global context but getFullName is not avaible in global context so 
// it will throw an error that getFullName is not a function 

// so to alter the behavoiur of this object inside the logName function , then this is the way 

var logPersonName = logName.bind(person);
// here we are saying to logName method that , change the reference of this object from GLOBAL context to person object 
// logName.bind(), will returns a function again by copying it 

logPersonName();

// call() method 

// we can directly call the logName() method by passing the this reference object 

logName.call(person);
logName.call(person,'en','es');

// apply() method 
//we can directly call the logName() method by passing the this reference object 
logName.apply(person,['en','es']);

// other ways of executing call, apply and bind methods 

(function(lang1,lang2){
    console.log('THIS', this);
    console.log('Logged '+ this.getFullName());
    console.log('LANG1', lang1,' LANG2', lang2);
    console.log('BIND ---------------');
}).bind(person,'en','es')();

(function(lang1,lang2){
    console.log('THIS', this);
    console.log('Logged '+ this.getFullName());
    console.log('LANG1', lang1,' LANG2', lang2);
    console.log('CALL ---------------');
}).call(person,'en','es');

(function(lang1,lang2){
    console.log('THIS', this);
    console.log('Logged '+ this.getFullName());
    console.log('LANG1', lang1,' LANG2', lang2);
    console.log('APPLY ---------------');
}).apply(person,['en','es']);




// function borrowing 

var person2 ={
    firstname:'VITTAL',
    lastname:'KAMKAR'
}

// here I have borrowed the function getFullName from other object and do the same thing for person2 object 
console.log('Function Borrowing', person.getFullName.call(person2));


// function currying , will help to build framework related to mathematics 
function multiply(a,b){
    return a*b;
}

// bind will create a copy of multuply() method and stores in multiplyByTwo variable , 
// but this parameter in bind() method is anything but and insting a should always point to 2
var multiplyByTwo = multiply.bind(this,2);
var multiplyByThree = multiply.bind(this,3);

console.log('Function Currying-->',multiplyByTwo(4));
console.log('Function Currying-->',multiplyByThree(5));

