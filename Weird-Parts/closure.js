/*
function greet(whattosay){
    return function(name){
        // with scope chain mechanism, I am accessing outside scope variable whattosay
        console.log(whattosay+' '+name);
    }
}

var sayHi = greet('Hi');
sayHi('vittal')
*/

// CLOUSRE PART 2

function buildFunctions() {
    var arr = [];
    for (var i = 0; i < 3; i++) {
        arr.push(
            // NOTE :  here, functions just creating those are not invoking 
            function () {
                console.log(i);
            }
        )
    }
    return arr;
}

var fs = buildFunctions();
fs[0](); // those functions are invoking here 
fs[1]();
fs[2]();
// will get output 3 for all functions executions because outer loop is already executed and i value is 3 
// after for loop execution , we are invoking functions now so it will take final value of i

// CLOUSRE PART 3 
function buildFunctions2() {
    var arr = [];
    // HOW TO RETAIN i value 
    // SOLUTION 1
    // with ES 6
    // for(let i=0;i<3;i++){
    //     arr.push(
    //         // NOTE :  here, functions just creating those are not invoking 
    //         function(){
    //             console.log(i);
    //         }
    //     )
    // }

    // SOLUTION 2, using IIFE 
    for (var i = 0; i < 3; i++) {
        arr.push(
            (function (j) {
                return function(){
                    console.log(j);
                }
            }(i))
        );
    }

    return arr;
}

var fs2 = buildFunctions2();
fs2[0](); // those fuinctions are invoking here 
fs2[1]();
fs2[2]();


// SOLUTION 1 
// O/P --> 0,1,2, why because, let is blocked scope and it will created each new variable  in the memory when every time for loop runs 



//SOLUTION 2
// --> to retain the i value , instead of creating a function , we must execute those newly creating function 
//     i.e to make it execute ,we have concept called IIFE 

