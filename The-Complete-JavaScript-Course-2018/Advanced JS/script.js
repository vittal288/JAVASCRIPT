// Function Consutrutor 
/*
var john = {
    name: 'John',
    YOB: 1988,
    job: 'SE'
}
var Person = function (name, YOB, job) {
    this.name = name;
    this.YOB = YOB;
    this.job = job;    
}

// IN-HERITANCE IMPLEMENTATION 

Person.prototype.calcAge = function () {
    console.log(2018 - this.YOB);
}

Person.prototype.lastname ='Something';

var john = new Person('John', 1988, 'SE');
john.calcAge(1988);

var jane = new Person('Jane', 1938, 'Police');
jane.calcAge(1988);

var mike = new Person('Mike', 1998, 'Retired');
mike.calcAge(1988);

console.log(john.lastname);
console.log(jane.lastname);
console.log(mike.lastname);

*/


// OBJECT Create Method i.e Object.create


/*
var personProto = {
    calcAge: function () {
        console.log(2018 - YOB);
    }
};


var john = Object.create(personProto);
john.name = 'John';
john.YOB = 1988;
john.job = 'John';


var jane = Object.create(personProto, {
    name: { value: 'Jane' },
    YOB: { value: 1978 },
    job: { value: 'Developer' }
});

// PRIMITIVE and OBJECTS 

// Primitive 
var a = 23;
var b = a;
a = 46;
console.log(a);
console.log(b);


// Objects 
var john = {
    name: 'Vittal',
    lastname: 'Kamkar'
}


// here, will share the memory space while copying the object
var jane = john;
john.name = 'Vittal 123';

console.log(john);
console.log(jane);

// Functions 
var age = 27;
var obj = {
    name: 'Vittal',
    city: 'Bangalore'
}

function change(a, b) {
    a = 30;
    b.city = 'Delhi'
}

change(age, obj);

console.log(age);
console.log(obj);


// Passing function as argument 

var years = [1990, 1988, 2009, 2016];
function arrayCalc(arr, fn) {
    var resultArr = [];
    for (var i = 0; i < arr.length; i++) {
        resultArr.push(fn(arr[i]));
    }
    return resultArr;
}
// ---------------
var ages = arrayCalc(years, (el) => {
    return 2018 - el;
});
console.log(ages);

//-----
function fullAges(el) {
    return el >= 18;
}
var fullAge = arrayCalc(ages, fullAges);

console.log(fullAge);

//---- MAX heart rate

function maxHeartRate(el) {
    if (el >= 18 && el <= 81) {
        return Math.round(206.9 - (0.67 * el));
    } else {
        return -1;
    }
}

var rates = arrayCalc(ages, maxHeartRate);
console.log(rates);

*/

// FUNCTION returns and FUNCTION 

/*
function interviewQuestion(job) {
    if (job === 'teacher') {
        return function (name) {
            console.log('Which Subject do you teach ?, ' + name)
        }
    } else if (job === 'designer') {
        return function (name) {
            console.log(name + ', can you explain what is UX is ?');
        }
    } else {
        return function (name) {
            console.log(name + ' What do you do ?');
        }
    }
}

var teacherQuestion = interviewQuestion('teacher');
teacherQuestion('Vittal');
var question = interviewQuestion()('Mike');


// IIFE 
// within the parenthisis () , JS will consider as declarations hence JS will not through any error for IIFE
// withing the curly braces {}, JS engine will treat those lines of code as expressions 
// Important of IIFE is Data privacy 
(function () {
    console.log('1');
})();

(function () {
    console.log('2');
}());

*/ 
// CLOSURES
/*
function reitrement(retirementAge) {
    var a = ' years left until retirement !';
    return function (YOB) {
        var age = 2018 - YOB;
    
        console.log((retirementAge - age) + a);
    }
}


var retirementUS = reitrement(66);
retirementUS(1988);

// re writing "interviewQuestion"  using closure 
function interviewQuestion(job) {
   return function(name){
    if(job === 'teacher'){
        console.log('Which Subject do you teach ?, ' + name)
    }else if(job === ' designer'){
        console.log(name + ', can you explain what is UX is ?');
    }else{
        console.log(name + ' What do you do ?');
    }
   }
}

var interviewTeacher = interviewQuestion('teacher')('Vittal');


*/

// BIND, CALL and APPLY



// example one 
function manuPulateThis(){
    console.log(this)
    console.log(this.name);
}

var myObj ={
    name :'vittal'
}

manuPulateThis();
manuPulateThis.call(myObj);

// example two 

var john ={
    name:'Vittal',
    lastname:'kamkar',
    getFullName: function (greet,greet2){
        console.log(greet + this.name +'  ' + this.lastname+ greet2);
    }
}

john.getFullName('Hii ');

var otherObj = {
    name:'Sandy ',
    lastname:'A'
}

var otherObj2 = {
    name:'Sandy 123 ',
    lastname:'A'
}
john.getFullName.call(otherObj,'Hello','  Mice Testing ');

john.getFullName.apply(otherObj,['Hello ',' Good Morning '])

john.getFullName.bind(otherObj2,'Hi There ')(' something ');


