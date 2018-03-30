// var arr = new Array();
/*
##########
var arr = [
    1,
    false,
    "hello",
    {
        name: 'vittal'
    },
    // this fn will create on the fly , will not store in the memory 
    function (name) {
        var gretting = 'Hello ';
        console.log(gretting + name);
        console.log(arguments)
    }
];

// console.log(arr);

// this statements executes and function 
arr[4](arr[3]['name']);

*/


/*
// ##########
function greet (firstName, lastName, language) {
    //setting default value to arguments 
    var language = language || 'en';

    if (arguments.length === 0) {
        console.log('parameters are missing !!!')
        console.log('-----------------')
        return;
    }
    console.log(firstName)
    console.log(lastName)
    console.log(language)
    console.log('-----------------')
}  


greet();
greet('vittal');
greet('vittal','kamkar');
greet('vittal','kamkar','es');

*/

/*

// Fn OVERLOADING is not possible in JS 

function greet(firstName){
    console.log(firstName);
}

function greet(firstName,lastName){
    console.log(firstName+'---'+lastName);
}

greet('vittal');

*/


// Put always a semicolon at the end of line 

function getname(){
    return
    {
        firstName:'vittal'
    }
}

// this will return an undefined, because JS engine will put automatic semicolon when it sees the carriage return at each line 
console.log(getname());
