# ALL ABOUT JAVASCRIPT
[HAVE A LOOK HERE](https://www.udemy.com/the-complete-javascript-course/)

### Following are the Javascript engines in different browsers 
1. V8
2. SpiderMonkey 
3. JavascriptCore 
4. Chakra 
5. Carakan 
6. KJS and Others 


JS is lightweight, Cross Platform and OOPS Programming language 

Primitive (not a object)Data types:
Number: always a floating value 5.0 
String
Boolean
Undefined: Data type of a variable which does not have any value yet 
null:Also means non existance 


JS has Dynamic Typing :

Type Coercion: convert one type to another: 26+"john"=> 26john 

Variable Mutation : Changing the value of variable.

Operator Precedence 

### DATA TYPES
Javascript by default supports dynamic typing 
+ ### Primitive Datatypes 
    + Number 
    + Boolean
    + String 
    + Undefined
    + Null
+ ### Non Primitive Datatypes 
    + Array 
    + Object 

## How JS works behind the scenes 
+ By default execution context is GLOBAL 
+ Each Function creates its own execution context on top of Global Execution Context in Execution STACK PASSION
 + [How Execution Context will create for javascript](./Screen-shots/execution-context.png)
 + [For More Info](https://www.udemy.com/the-complete-javascript-course/learn/v4/t/lecture/5869128?start=0)

+ **Execution Context** : It contains : When function called execuction context will create in two phase
    
    ### CREATION PHASE
    + 1.1 **Variable Object(VO)**
    + 1.2 **Creation of Scope Chain**  
    + 1.3 **Determine the value of *this* varible in that scope**

        
        
    1.1 **Creation of Variable Object**
    + The Orgument object is created, containing all the arguments were passed into the function 
    + Code is scanned for each function: For each function, property is created in the Variable Object, pointing to function 
    + Code is Scanned for variable decleration: For each variable property is created in Variable Object and set to undefined 
    + variables declarations goes in the top
    + BOTH ABOVE POINTS CONSIDERED AS **HOISTING**

    *hoisting example*
    ```
    var text ='something';
    function invoke(){
        var test ='adsadad';
        if(true){
            console.log('Hii', text);
            var text = ' new thing';
        }
    }
    invoke();
    ```
    //outout is undefined because local variable declaration takes top priority and due to hoisting, variable declaration goes in the top of the respective block

    1.2 **SCOPE CHAIN**: 
    + Where we can access the functions and variables
    + **Each New function creates a scope** but not with if,else and while block
    + **Lexical Scoping** :A Function that lexically within another function and get access to the scope of outer function, 
    + [for more Info](./Screen-shots/scope-chain.png)
    + Execution Phase means, how the functions are called and Scope chain or lexical scope is how are the functions placed in the code [Have a look on Difference between Execution Phase and Scope Chain](./Screen-shots/execution-context-and-scope-chain.png)

    1.3 ***THIS* KEYWORD** 
    + **Regular function call** *this* points to at global object or window object 
    + **Method call**: *this* points to the object, that is calling the method
    + *The **this** keyword is not assigned a any value, until a function where it is defined actually called*
    + *this* assgined a value as soon as object invoked a method 

    ### EXECUTION PHASE
    + In Execution phase, the code of the function that generated the current execution context will run line by line 

 

 ## ADVANCED JavaScript: Objects and Functions

+ In JS *EVERYTHING* is an **OBJECT**
+ In JS we have big types of *VALUES* i.e Primitives and Values 

    | PRIMITIVES           | OBJECTS     |
    | -----------------    |--------------
    | NUMBERS              | ARRAYS     |
    | STRINGS              | FUNCTIONS  |
    | BOOLEANS             | OBJECTS    |
    | UNDEFINED            | DATES      |
    | null                 | Wrappers for Numbers,String and Booleans |

+ **INHERITANCE** is a concept of creating an object based on another , [for more info](./Screen-shots/inheritance.png)

+ **PROTOTYPE** is an object from which we can implement inheritance and we can add methods and properties to the class or function dynamically 
+ **PROTOTYPE CHAIN** is concept in JS from which we can access the methods and propertes of other object or window or global object using [prototype chain](./Screen-shots/prototype-chain.png) and this is the beauty of JS
    + Whenever you tried to access a method/prop from a object , JS engines seraches in its prototype object if not found , it will search in its parent till global or window object and this process is called **PROTOTYPE CHAIN**
+ **null** is only object which does not have protype object and thats why it returns an **undefined**




### CLOSURES 
```
function outerfunction(retirementAge) {
    var a = ' years left until retirement !';
    // inner functions
    return function (YOB) {
        var age = 2018 - YOB;
    
        console.log((retirementAge - age) + a);
    }
}

```
 1. Inner function has an always access to the variables, parameters of its outer function, event after the outer function has returns (returns from the execution context stack) and this concept is called closure
 2. Scope Chain of inner function has always intact with outer function 
 3. See pictorially of [CLOSURE](./Screen-shots/closure.png)

 ### BIND,CALL and APPLY

these are the methods of first class functions to explicitly set the value of *this* object in the function 
1. **call**, method only accepts a object and function parameters i.e *fnName.call(otherObject,params)*
2. **apply**, this method accepts a object and parameters as an array i.e *fnName.apply(otherObject,[arg1,arg2])*
3. **bind** , this method accepts a object and parameters as string and it returns a function 
*fnName.bind(otherObject,params)()*
    1. Bind method is used to pre set the argument of the function 


# ES6 or ES 2015 
 [ES6 compatibility Check in Modern Browser](https://kangax.github.io/compat-table/es6/)

 *each below concepts are explained in The-Complete-Javascript-Course-2018/ES6 folder*
1. Variable declarations with *let* and *const*
2. Blocks and IIFEs
3. Strings and Template strings ``
4. Arrow Functions ()=>{}
5. Destructuring {} : The way of extract data from data structures like array and object 
6. Arrays(new array methods) : from,find,findIndex
7. The spread operator ...
8. Rest and Default parameters 
9. Maps : The new data structure in ES6 and It is similar to Key value pairs but keys are anything like 
function,numbers and etc 
10. Promises 
### Advantage of map
    1. We can use anything as key while creating hash map or object 
    2. We can iterate with foreach and for...loop easily 
    3. We can create complex data structure using anything as keys 
    4. Build in good methods like set,get,size,clear, entries ....
10. Classes and Subclasses 

**How to use ES6 or ES 2015 in 2016 versions browsers**

#### Variable declarations with *let* and *const*
variable declares with *var* are function scoped but variables declared with *const and let* are block scoped

### Tempral Dead zone 
1. If you are trying to access an variable(which are declared using let and const) , you will get an error but not in ES5(variables declared using var) and this situation is called *Tempral Dead Zone*
2. Variables will hoisted but we cannot able to access before they declare 

### Arrow function
1. Arrow function does not have *this* keyword i.e just lexical keyword 
2. Arrow function share the *this* keyword from its surroundings shown below.

**NOTE** : Below clicked event listener will not work for ES5 function expression because *this* keyword will not available in that scope
```
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
```


### WEB API
What are Wen API?
Web API are utility methods which javascript engine has access to them to implement features in the application
For Example geolocation, setTimeout,localStorage,sessionStorage,XMLHttpRequest and lot more

### ASYNCHRONOUS in JAVASCRIPT 
By Default JS executes the code synchronously and there are cases where it executes asynchronously using event loop and message queue.


[What is synch and asynch](./Screen-shots/synch-asynch-js.png)
1. Synchronous means one by one at a time(it will finish one and takes other)
2. [How Asynch code exeuctes behind the scene](./Screen-shots/Event-loop-Message-queue.png) 

### PROMISES
**Promises are nothing but**
* Object that keep track about whether certain event has happened or not;
* Determines what happens after event has happened;
* Implements the concept of a future value that we're expecting 

**PROMISE STATES**

[See Here Promise States](./Screen-shots/promise-states.png)

### ASYNC and AWAIT
* async and await are the feature of ES8(ES2017)
* async and await are designed to consume the promises(because of consumptions of promise are quite challenging and difficult to manage);
* async function always returns a promise 
* there is no separate method to handle the erros in ASYNCH AWAIT like catch block, so we have to execute asynch await code in try catch block  

### AJAX and FETCH 
* fetch is JS feature and it allows to communicate between the server and client through API like AJAX
    
### MEMORY LEAKS 
*there are 4 ways to leak the memory in JS [check here](https://auth0.com/blog/four-types-of-leaks-in-your-javascript-code-and-how-to-get-rid-of-them/)*
1. Accidental Global variables 
2. Forgotten timer or callbacks
3. Out of DOM reference 
4. Closures 



### INHERITANCE 
1. JS Supports Multi level inheritance

### DESIGN PATTERNS
* Module Design Pattern

### Usage of "use strict"
* It throws exceptions for common coding mistakes like improper closing of semi colons and 
* It Throws an error for unsafe actions in the page 
* if you write like below statements it will throw an error in strict mode
```
x =10;
console.log(x); // uncaught reference error 

```
* strict mode allows to write secure JS code 
* It shows as en error for bad syntax code 

