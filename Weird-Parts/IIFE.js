// // function statement 
// function greet(name){
//     console.log('Hii', name);
// }

// greet('vittal');

// // using a function expression 
// var greetFun = function(name){
//     console.log('Hii', name);
// }

// greetFun('vittal')



// Immdiately Invoked Function Expression 
var greeting = function(name){
    return 'Hello '+name;
}('vittal');

// // greeting is holding an string value now 
// console.log(greeting);


// all variables which are declared inside the IIFE are wrapped inside it because of different execution context 
(function(global, name){
    var grerting ="Hola";
    console.log(greeting+' '+name);
    console.log('GET GLOBAL CONTEXT', global);
})(window, 'vittal');