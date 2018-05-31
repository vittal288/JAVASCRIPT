// write a function and should execute in both passions sum(a,b) and sum(a)(b)

// function sum(a){
//     if(arguments.length === 2){
//         return arguments[0] +arguments[1];
//     }else{
//         return function(b){
//             return a+b;
//         }
//     }
// }

// console.log(sum(1,2));
// console.log(sum(1)(2));


var arr =[1,2,3];

arr.push(4);
console.log(arr);
arr.unshift(0);
console.log(arr);
arr.pop()
console.log(arr);