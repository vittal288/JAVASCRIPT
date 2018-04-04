var Person = function (firstName, lastName) {
    console.log(this);
    this.firstName = firstName;
    this.lastName = lastName;
    console.log('This function is invoked !');
}

// Advantage of adding prototype of methods and properties are
// --> If you add methods direct to function object, it will create copy of same methods for all instances 
// --> if you add same method through prototype chain, then it will be only one copy in memory 
// --> hence it increases the perforamnce of a page 
Person.prototype.getFullName = function () {
    return this.firstName + ' ' + this.lastName;
}


// -->in below example, new keyword will create and empty object and it inovokes the Person() methods
// --> and it creates the executation context and "this" variable pointing to that empty object 
var john = new Person('vittal', 'kamkar');
console.log(john)


var john = new Person('vittal 2', 'kamkar');
console.log(john)
// Person();

// even after creating of an object 
Person.prototype.getFullFormalName = function(){
    return this.lastName+',' + this.firstName;
}

console.log('Formal Name ', john.getFullFormalName());


// @@@@@@@ ADDING SOME METHODS to BUILT IN FUNCTION CONSTRUCTORS 
// Hence this called PROTOTYPE Inheritance, because all strings(here strings)/numbers and other functional constructors are accessed to 
// --> method called isPalindrome()
String.prototype.isPalindrome = function(){
    let ret = this.split("").reverse().join("");
    if(str === ret){
        return true;
    }else{
        return false;
    }
}
var str = "Vittal";
console.log(str.isPalindrome());

var str = "1221";
console.log(str.isPalindrome());

// Trying to override the existing methods of string 
//  throws an error, Uncaught TypeError: str.length is not a function
String.prototype.length = function(){
    return 'something';
}

// console.log(str.length());

Number.prototype.isPositive = function(){
    // var ret = this*Math.sign();  
    return this > 0;
}
var num = -3;
console.log('IS POSITIVE', num.isPositive());



// Dangerous ASIDE with built in function constructors and primitive 
var a = new Number(3);
var b =3;
if(a==b) // true
if(a === b) // false , because a is an object but b is an primitive number 


// TRY TO AVOID to use for...in loop for Array because array is an object 
 var arr = ['Vittal','Sandy','Akhila'];

 for( var prop in arr){
     console.log(prop+":"+arr[prop]);
 }
// this, output is proper but in case if someone added custom method to ARRAY's function constructor method using prototype 
// --> as shown below 

Array.prototype.customFeature = function(){

}
// now above array iteration, will also include customFeature as seperate key since array is object 
// so try to avoid for...in for array 