# ALL ABOUT JAVASCRIPT
[HAVE A LOOK HERE](https://www.udemy.com/the-complete-javascript-course/)


JS is lightwaight, Cross Platform and OOPS Programming language 

Primitive (not a object)Data types:
Number: always a floating value 5.0 
String
Boolean
Undefined: Data type of a variable which does not have any value yet 
null:Also means non-existant


JS has Dynamic Typing :

Type Coercion: convert one type to another: 26+"john"=> 26john 

Variable Mutation : Changing the value of variable.

Operator Precedense 

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
    + BOTH ABOVE POINTS CONSIDERED AS **HOISTING**

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

    | PRIMITVIES           | OBJECTS     |
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
    
