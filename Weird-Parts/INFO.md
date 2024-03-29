### Object: It is a just collection of name value pairs
--> SYNTAX 
--> Execution Context (where the code execute!  for example globally )
    :Base execution context is global 
--> Lexical Environments(Where the, code physically exists )
--> Object never creates an executation context like function 

### How the code will execute ?
-->JS engine will create a global object(window) and creates special variable called this 
--> At global both window and this are identical 
--> GlOBAL means , not inside a function it is just global 

### Javascript has two executation PHASES while executing the code or in Execution Context
1. Creation PHASE(global object , this variable and Outer Environment)
2. Execution PHASE(it will execute the code from the memory by line by line )
3. For Each function executation, JS engine will creates a new  fn's executation context and update the stack context
4. Once the fn, finishes its executation then it will pop uped from the stack 

### What is HOISTING ?
--> Setup memory space for variables and functions and set to value to undefined,  called HOISTING.
--> Javascript engine will reserve the space in browser memory for all the variables and functions which we created in the JS file.
** Scenario ONE
console.log(a) 
var a ="Hello World";
O/P --> due to hoisting concept , will not get an error though we get as undefined in the console.

** Scenario TWO 
console.log(a)
O/P--> Uncaught Reference error: a is not defined 

### All variables in the JS code are set to undefined initially 

### UNDEFINED 
--> undefined is special value and it is keyword 
var a;
if(a === undefined){
    console.log('a is undefined')
}else{
    console.log('a is not defeined');
}

### Javascript is SINGLE THREADED and SYNCHRONOUS EXECUTION 
*Single Threaded --> Means one command executed at a time 
* Synchronouses --> Execute code in Order 

### EXECUTION STACK 
--> JS Engine will keep all invoking function one top of the other by keeping global executation context at the bottom 
--> Each function invoke will create its executation context and keep it on executation stack (refer screen_shots/Execution-Stack-For-Fn-Invoke.png)
--> Every Execution context is able to access OUTER ENVIRONMENTS(i.e, each function is able to access variable or function from Lexical Environment)

### VARIABLE ENVIRONMENTS 
-->Where the variable live and how they relate to each other in memory
--> The variables which are declared in that function are reserved to that executation context
--> Example:In below example myVar from global context is different to the same variable declared withing function 
function a(){
    var myVar =2;
    console.log(myVar);
}
var myVar= 1;
console.log(myVar);
a();


### LEXICAL ENVIRONMENT
--> Immidiate parent or higher scope of current scope called Lexical Environment
--> For Example :In below example Lexical Environment of function a, is global Environment or global scope, for more clarity please refer screen shot from 
    screen_shots/Lexical-Environment-Scope.png image 
function a(){
    //
}
var myVar =1;
console.log(a)

### SCOPE CHAIN 
--> Execution Context(a function) will keep Searching or finding till it reaches GlOBAL CONTEXT is called SCOPE CHAIN  for more clarity please refer screen shot from 
    screen_shots/Scope-Chain.png image 

### LET keyword is used to declare the variable in block scope
--> For Example ONE : in below example ONE c is reserved to that block
if(true){
    let c ="something";
}
console.log(c) 
O/p--> Uncaught ReferenceError, c is not defined

--> For Example TWO: in below example c is reserved to that block
if(true){
    var c ="something";
}
console.log(c) 
O/p--> something

### ASYNCHRONOUS call blocks
-->ASYNCHRONOUS means more than one at time and not in order 
--> Once JS engine finished executation of Stack(Global executation Context, fn a() Execution context) is empty JS peroidically , then it will start executing the EVENT QUEUE items(Click Events, HTTP Call) if that event is triggered from user
     for more info please see screen shots in screen_shots/Event-Queue-1.png path 
--> Each ASYNCHRONOUS Events will excute Synchronously one by one, in order stack again 
--> Once JS start executing Event Queue items, it will creates it stack again as shown in screen shot screen_shots/Event-Queue-Stack.png


### TYPES and JAVASCRIPT 
--> JS is dynamic typing, means the same variable can hold any data types data in executation and JS engine will automtically deltermines the 
    whih type of data it is holding dynmically 

  ## PRIMITIVE TYPE(6 types) UNDEFINED, NULL, BOOLEAN,NUMBER,STRING,SYMBOL{ES6 feature}:
  --> Type of data that represents a single value 
  
  ## REFERENCE TYPES(ARRAY and OBJECT)
  --> These types holds these initila value in pointer reference 


### OPERATORS 
--> All OPERATORS are the infix notations functions as shown below 
   --> prefix notation +(3,4)
   --> suffux notation (3,4)+
   --> infix notation (3+4)


### OBJECT and FUNCTIONS 
-->

### NAMESPACE 
--> In modern world , the namspace is container for a variable and methods 
--> There is no namspace concept in JS instead we can fake it using object literals like shown below
var nameSpace ={
    firstName:'Vittal',
    lastName:'Kamkar'
}

### JSON and OBJECT LITERALS 
    ##OBJECT 
    --> var objectLiteral ={
        firstName:"Vittal",
        lastName:"Kamkar"
    }

    ## JSON 
    --> var jsonObj ={
        "firstName":"Vittal",
        "lastName":"Kamkar"
    }

    JSON.parse(JSONData) --> convert JSON to an Object literals
    JSON.stringify(Object)---> convert Object to JSON 


### FUNCTIONS are OBJECTs
--> FUNCTIONS are special types of objects 
--> Functions can be assigned to variables ,pass them as arguments and create them on fly 
--> Functions can defeined without name, called anonymus functions 
--> Functions can be assigned with PRIMITIVE types,Object and Functions
--> Functions has on more property called CODE i.e invocable()
--> For more info, have a look on screen_shots/Functionl-Modal.png screen shot 
--> FUNCTION executation contains : Variable Environment, this and Outer Environment, CODE property, NAME property 

### EXPRESSIONS and STATEMENTS 
--> EXPRESSIONS returns a value a===3 , which returns and true or false 
--> STATEMENTS will not returns anything , if(a===3){ } 

### BY VALUE and BY REFERENCE
--> refer,by-value-by-reference.js 
--> BY REFERENCE will share the same memory 

### THIS
--> Whenever executation context created , JS engine will provide us this variable 
--> Inside, Method(fn) of an object , this will always point its parent object as shown below 
var c = {
    sampleFn:function(){
        console.log(this)// this will always point to c object 
    }
}

### ARRAY collection of anyting 
var arr = new Array(); || var arr = [];

### FUNCTION OVERLOADING
--> in JS function OVERLOADING is not POSSIBLE 

### SYNTAX parser 
-->JS engine, will parse the code charector by charector till get proper intend or else it will throw an error 
--> Use always semicolon at the end of each JS line fo code , othterwise JS engine will make decision to put a semicolon;


### IIFE (Immediately Invoked Function Expession )
(function(){

}());

(function(){

})();

// OR 

var greeting = function(name){
    console.log('HII',name);
}('vittal');

### CLOSURE 
--> CLOSURE is just feature in JS engine to access the variables, it supposed from outside scope 
--> JS engine has a mechanism to access the variables outside of the scope even though outside executation context popped up from stack and that feature is called CLOSURE
function greet(whattosay){
    return function(name){
        // with scope chain mechanism, I am accessing outside scope variable whattosay
        console.log(whattosay+' '+name);
    }
}

var sayHi = greet('Hi');
sayHi('vittal')
--> in above example, greet function will execute by its own execution context and once its executes, the executation context will popped out from the stack 
    but keeping "whattosay" variable in the memory and child function i.e "anonymus" sayHi() function is still has access to "whattosay" variable through chain scoping 
    hence, accessing of outside scope's in memory variables or supposed to accessable variable  inside the child fn called CLOSURE
--> For more infom, please have a look screen shots screen_shots/closure.png


### CLOSURE and CALLBACKS 
--> I executed you and you execute a function for me which I have provided once you done 

###CALL, APPLY and BIND 
--> Control the behaviour of this object inside the function executation context is possible through call(),apply() and bind() methods
--> all functions have access to call(), bind() and apply() methods

### FIRST CLASS FUNCTIONS 
--> Function is special type of object 
--> We can pass function as arguments
--> Function which returns another function

### FUNCTIONAL PROGRAMMING 
--> Functional programming is beuaty of JS and we cannot find in other langues 
-->Fn programming, will take you to higher level pf JS developer 
-->Because of first class function , we can achieve fn programming
--> GO THROUGH UNDERSCORE.js for functional programming
--> Resuability is very high
--> very less code to implement hude logic 
-->Very high performance 
--> Basic idea in to build open source frameworks 


### OOPS in JS
 ## INHERITANCE(CLLASSICAL Inheritance and PROTOTYPE Inheritance)
 --> One property gets an access to methods and properties of another object 
 -->CLLASSICAL is older and popular way of implementing 
 --> CLLASSICAL Inheritance, is the way we implement in C#,JAVA and other langugaes 
 --> CLLASSICAL Inheritance, like class, friend,protected, public and interface 

 -->PROTOTYPE Inheritance is easy to implement
 --> PROTOTYPE Inheritance, is simple, extensible and flexible 
 --> All object has reference to another object through PROTOTYPE object 

### REFLECTION: (oops.js)
--> an Object can look at itself, listing and changing its properties and methods called reflection

### BUILDING OBJECT (create-object.js)

--> new keyword is used to create an object 
--> for example : var john = new Person();
    -->in above example, new keyword will create and empty object and it inovokes the Person() methods
    --> and it creates the executation context and "this" variable pointing to that empty object 

### FUNCTION CONSTRUCTORS:
--> A normal function that is used to construct an object and here "this" variable to point to an empty object
    --> and that object is returned from the function automtically
    --> JS has feature to convert string an object automtically but not with Numbers
-->
--> Build Function CONSTRUCTORS
    --> var a = new Number(3);
    --> var ar = new Array();
    --> var str = new String('Vittal');

### PROTOTYPE(prototype-object.js)
 -->prototype it is feature of JS engine from which we can the dynamic methods and properties to an existing functions 
 -->It  saves the memory by avoiding creating a single copy of methods and properties 
 ## Advantage of adding prototype of methods and properties are
    --> If you add methods direct to function object, it will create copy of same methods for all instances 
    --> if you add same method through prototype chain, then it will be only one copy in memory 
    --> hence it increases the perforamnce of a page 




### BUILDING OUR OWN LIBRARY CALLED GREETER



