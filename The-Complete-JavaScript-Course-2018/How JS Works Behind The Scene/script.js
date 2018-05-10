//@@@ HOISTING
console.log('@@@@ HOISTING @@@@');

// FOR FUNCTIONS 
calcAge(1988);

//for  function declaration 
function calcAge(year) {
    console.log(2018 - year);
}
// still above codes works due to hoisting, because in creation phase VO(Variable Object) is created and stored in the memory and it is avaible in Execution Phase
// Hosting works for function declarations not for the function expression , because exection context will not created since function is assigned back to a variable 



//for function expresion 

// retirement(1988);
var retirement = function (year) {
    console.log(60 - (2018 - year));
}


// FOR VARIABLES 
console.log(age);
var age = 30;
console.log(age);

function foo() {
    console.log(age);
    var age = 23;
    console.log(age);
}

console.log(age);






//@@@ SCOPE CHAIN 
console.log('@@@@ SCOPE CHAIN @@@@');

var a = 10;
first();
function first() {
    var b = 20;
    second();
    function second() {
        var c = 30;
        console.log(a + b + c);
    }
}


//@@@@ Difference between Execution phase and scope chain 
console.log('EXECUTION PHASE DIFF SCOPE CHAIN ');
var a = 'Hello!';
first();

function first() {
    var b = 'Hii';
    second();

    function second() {
        var c = 'Hey ';
        third();
    }
}

function third() {
    var d = 'Vittal';
    // console.log(a+b+c+d); //error 
}


// @@@ THIS Keyword 
console.log('@@@@ THIS @@@@');


// 1 Regular function call this, points to at global object or window object 
calculateAge(1988);

function calculateAge(year) {
    console.log(2018 - year);    
    console.log(this);
}


// 2 Method call : *this* points to the object, that is calling the method
var obj ={
    name:'vittal',
    DOB:1988,
    calcAge: function(){
        console.log(2018- this.DOB);
        console.log(this);

        // Regular function call this, points to at global object or window object 
        innerFn();
        function innerFn(){
            console.log(this);
        }
    }

}

obj.calcAge();

// METHOD BORROWING 

// 3 *this* assgined a value as soon as object invoked a method 
var mike ={
    name:'Mike',
    DOB: 1987
}

mike.calcAge = obj.calcAge;
mike.calcAge();

