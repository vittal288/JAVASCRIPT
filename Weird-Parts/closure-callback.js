function sayHi(){
    var greeting ="Hi";

    setTimeout(function(){
        console.log(greeting);
    },3000);
}

sayHi();


// CALLBACK 
function tellMeOnceDone(callback){

    var a = 100; // some work 
    var b = 100; // some other work
    console.log(a+b);
    
    callback();
}

tellMeOnceDone(function(){
    console.log(' call back is executed ')
})