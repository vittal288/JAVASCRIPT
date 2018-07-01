//@@@@@ let and const @@@@

/*
//ES5
var name5 = 'Jane Smith';
var age5 = 26;
name5 = 'Jane Miller';

console.log(name5);

// ES6
let name6 = 'Jane smith';
let age6 = 29;
name6 = 'Jane Miller'; // Assignment to constant variable 
console.log(name6);

// variables with var are functions scoped and variables with let and const are blocked scope


// let i = 20;
// for (let i = 0; i < 5; i++) {
//     console.log(i);
// }
// console.log(i);
// o/p ---> 0,1,2,3,4,20


var i = 20;
for (var i = 0; i < 5; i++) {
    console.log(i);
}
console.log(i);
// o/p ---> 0,1,2,3,4,5

*/




//@@@ BLOCKS and IIFES @@@@

/*
// ES6 IIFE
// {
//     let a = 2;
//     const n = 334;
// }

// console.log(a);


(function(){
    var a =1312;
})();

console.log(a)

*/


// Template String 

/*
let firstname = 'Vittal';
let lastname = 'Kamkar';
let YOB = 1988;

function calcAge(year){
    return 2018 - year;
}

// ES5
console.log('This is'+firstname +' '+lastname +' and he is' + calcAge(YOB)+' years old ');

//ES6
console.log(`This is ${firstname} ${lastname} and he is ${calcAge(YOB)} years old`);

// few new string metods 

const str ='Welcome to possible !!!';
console.log(str.startsWith('w'));
console.log(str.endsWith('e'));
console.log(str.includes('to'));
console.log(str.repeat(5));

*/


// @@@@ ARROW FUNCTION @@@@@@

/*
const years = [1958, 1988, 1978];

//ES5 
var ages5 = years.map(function (item) {
    return 2018 - item;
});

console.log(ages5);

//ES6
let ages6 = years.map(item => 2018 - item);
console.log(ages6);

// Lexical scoping in Arrow function 

//ES5
var box5 = {
    position: 1,
    color: 'Green',
    clickMe: function () {
        var self = this;
        document.querySelector('.green').addEventListener('click', function () {
            // console.log('This is '+ this.color+'at '+ this.position); // this is not available here
            console.log('This is ' + self.color + 'at ' + self.position);
        });
    }
}

// box5.clickMe();
// here this variable is not available because of common pattern, if you call  function from any object then this,/
// variable point to that function OR if function invoked generally then this keyword always point to global or window object 
// to avoid above issue , create scope variable using called self and assign this to self i.e var self = this and replace it occurances OR use ES6 arrow function 


const box6 = {
    position: 1,
    color: 'Green',
    clickMe: function () {
        document.querySelector('.green').addEventListener('click', () => {
            console.log('This is ' + this.color + ' box at ' + this.position);
        });
    }
}

box6.clickMe();



// another example 

// ES5
// function Person(name) {
//     this.name = name;
// }

// Person.prototype.myFriends = function (friends) {

//     var arr = friends.map(function (item) {
//         return this.name + ' is friend with ' + item;
//     }.bind(this));
//     console.log(arr);
// }

// var friends = ['John', 'Mike', 'Bob'];
// new Person('Vittal').myFriends(friends);


//ES6
function Person(name) {
    this.name = name;
}

Person.prototype.myFriends = function (friends) {

    var arr = friends.map((item) => `${this.name} is friend with ' ${item}`);
    console.log(arr);
}

var friends = ['John', 'Mike', 'Bob'];
new Person('Vittal').myFriends(friends);


// @@@@ Destructuring 

// ES5
var person =['Vittal',29];
// var name = person[0];
// var age = person[1];

// ES6
const [name,age] =['vittal',29];
console.log(name)
console.log(age)

var obj ={
    firstname:'Vittal',
    lastname:'Kamkar'
}

// brand new constants 
const {firstname,lastname} = obj;
console.log(firstname);
console.log(lastname);

const {firstname:a,lastname:b} = obj;
console.log(a);
console.log(b);

// real implementation 

function calcAgeOfRetirement(year){
    const age = new Date().getFullYear() - year;
    return [age,60-age]
}


const [age2,retirement] = calcAgeOfRetirement(1988);
console.log(age2)
console.log(retirement);

*/



// @@@@ ARRAYS @@@@@


/*
const boxes = document.querySelectorAll('.box');
console.log(boxes);// will get NodeList 


// ES5
const boxesArray5 = Array.prototype.slice.call(boxes); // convert NodeList to an array 
// console.log(boxesArray5);

// boxesArray5.forEach(ele => {
//     ele.style.backgroundColor ='red';
// });


// ES6 
const boxesArray6 = Array.from(boxes) // 'from' method will convert NodeList object to an array

boxesArray6.forEach(el => el.style.backgroundColor = 'yellow');


// ES5 
// for (var i = 0; i < boxesArray5.length; i++) {
//     if(boxesArray5[i].className === 'box blue'){
//         continue;  //it will skip the iteration of the loop at current position and goes to next item in the list

//         // break;// break the complete iteration of the loop at current position and it wont continue 
//     }
//     boxesArray5[i].textContent =' I am changed to Yellow'
// }

// ES6

for(const el of boxesArray6){
    if(el.className === 'box blue'){
        continue;
    }
    el.textContent ='I am changed to Yellow from ES6'
}

//ES5 
var ages =[11,12,13,67,78]
var full = ages.map(function(el){
    return el >= 18;
});
console.log('Index -->', full.indexOf(true));

// ES6 

console.log("ES6 Index", ages.findIndex(cur => cur >= 18));

console.log('ES6 Find Item ',ages.find(cur =>  cur>= 18));
*/





// @@@ SPREAD OPERATOR  @@@
// --> spread operator takes an array and spreads into single values 
/*
// ES5
function sum(a,b,c,d){
    return a+b+c+d;
}

const sum1 = sum(1,2,3,4);
console.log(sum1);

var ages =[1,2,3,4];
const sum2 = sum.apply(null,ages);
console.log(sum2);


//ES6 
const sum3 = sum(...ages);// spread operator, it spreads out the all components into each item of it
console.log(sum3);

// two join two array 
const arr1 = [1,2,3];
const arr2 = [4,5,6];

const mergedArr = [...arr1,...arr2];
console.log(mergedArr);

// merge two node list 

var h1 = document.querySelector('h1');
var boxes = document.querySelectorAll('.box');

const all = [h1,...boxes];

// add array items
function sum(a,b,c,d){
  console.log(a,b);
}

var arr = [1,2,3,4];


var add = sum(...arr);

// convert node list to array 
Array.from(all).forEach( el => el.style.color ='purple');

*/


// @@@ REST PARAMETERS 

/*
// these are used to pass n number arbitrary parameters to the function and use those in the function definitions 
// REST operator is dead opposite to spread operator, takes in single values and merged to one entity or array 


// ES5 
function isFullAge5(ageLimit){
    // argument is not actual array but it looks like in structure, instead it is an object 
    var argumentsArr = Array.prototype.slice.call(arguments,1); // slice method starts it count from index from 1

    argumentsArr.forEach(function(cur){
        console.log((2018-cur) >= ageLimit)   ;
    });
}
isFullAge5(21,1990,1999,1965);

// ES6 
function isFullAge6(ageLimit,...years){
    // console.log(years);
    years.forEach(el => console.log((2018 -el) >= ageLimit));
}

isFullAge6(21,1990,1980,2018);

*/

// @@@ DEFAULT PARAMETERS 
/*
// this parameters will help to set inside a function to parameter to some default value 

// ES5 
// using function constructor 
// function Person(firstname, YOB, lastname, nationality) {

//     // assigning default values 
//     lastname === undefined ? lastname = 'Kamkar' : lastname;
//     nationality === undefined ? nationality = 'India' : nationality;


//     this.firstname = firstname;
//     this.lastname = lastname;
//     this.YOB = YOB;
//     this.nationality = nationality;
// }

// var john = new Person('Vittal', 1988);
// var john1 = new Person('Vittal', 1988, 'Kamkar234', 'USA');

// console.log(john);
// console.log(john1);

//ES6

function Person6(firstname,lastname,nationality='India'){
    this.firstname = firstname;
    this.lastname = lastname;
    this.nationality = nationality;
}
var john = new Person6('Vittal', 'Kamkar');
var john1 = new Person6('Vittal', 'Kamkar 2','USA');

console.log(john);
console.log(john1);

*/


// @@@@ MAPS 

/*
// Maps are new type of data structure in ES6 and which contains the keys as anything not restrict to only string as like we use in JSON or Object 
const question = new Map();

question.set('question', 'What is the official name of latest version of Javascript ?');
question.set(1, 'ES5');
question.set(2, 'ES6');
question.set(3, 'ES2015');
question.set(4, 'ES7');
question.set('correct', 3);
question.set(false, 'Wrong, please try other options ');
question.set(true, 'Correct answer ');


// to get the data from map
console.log(question.get('question'));

// get the size of the map
console.log(question.size);



// check key availability 
if (question.has(4)) {
    // delete the record from map
    // question.delete(4);
}

// clear the map 
// question.clear();


// we can iterate the map with forEach and for ...of loops
// question.forEach((value,key)=> console.log(`This is ${key} and its value set to ${value}`));


// using destructuring [key,value]
for (let [key, value] of question.entries()) {
    // console.log(`This is ${key} and its value set to ${value}`)

    if (typeof (key) === 'boolean') {
        console.log(`Answer ${key}: is ${value}`);
    }
}

const ans = parseInt(prompt('What it the correct answer ?'));

console.log(question.get(ans === question.get('correct')));

*/


// @@@@ CLASSES and SUB-CLASSES 

// ES5
// Create Person class with function constructor using function declaration 

var Person5 = function (name, YOB, job) {
    this.name = name;
    this.YOB = YOB;
    this.job = job;
}

Person5.prototype.calcAge = function () {
    return new Date().getFullYear - this.YOB;
}

var john5 = new Person5('John', 1988, 'TL');






// ES6 

// we can add only methods to classes not the properties 
// inheriting properties using object instances is not the best practices,so it is avoided in ES6
/*
class Person6 {
    constructor(name, YOB, job) {
        this.name = name;
        this.YOB = YOB;
        this.job = job;
    }

    calcAge() {
        return new Date().getFullYear - this.YOB;
    }

    //static methods, are normal methods and we can invoke them using class keyword not with instance of the class because they are attached with the class

    static greeting() {
        console.log('ES6 Alert from static method !!!');
    }
}

const john6 = new Person6('John', 1988, 'TL');

// accessing from class name
Person6.greeting();

// SUBCLASSES : are used to implement inheritance 

// ES5 : Inheritance
// SUPERCLASS
function Person(name, YOB, job) {
    this.name = name;
    this.YOB = YOB;
    this.job = job;
    this.calcAge = function () {
        return (new Date().getFullYear()) - YOB;
    }
}

Person.prototype.getName = function () {
    return this.name;
}

// SUBCLASS
function Athlete(olympics, medals, wonMedals) {
    this.olympics = olympics;
    this.medals = medals;
    this.wonMedals = wonMedals;
}

// Inherit Superclass properties and methods using prototype 
Athlete.prototype = new Person('Vittal', 1988, 'Sports');

const vittal = new Athlete('Played', 6, 10);
console.log(vittal.calcAge());
console.log(vittal.getName());
console.log(vittal);
*/


// ES6 

class Person6 {
    constructor(name,YOB,job){
        this.name = name;
        this.YOB = YOB;
        this.job = job;
    }

    calcAge(){
       console.log((new Date().getFullYear()) - this.YOB);
    }
}



class Athlete6 extends Person6{
    constructor(name,YOB,job, medals,olympics){
        //super method will invoke the Superclass's constructor method to access its properties 
        super(name,YOB,job);

        this.medals = medals;
        this.olympics = olympics;
    }

    wonMedals(){
        this.medals++;
        console.log(this.medals);
    }
}

const john = new Athlete6('John',1988,'Swimmer',10,'Played');
john.calcAge();
john.wonMedals();


