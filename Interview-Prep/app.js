// write a function and should execute in both passions sum(a,b) and sum(a)(b)

function sum(a){
    if(arguments.length === 2){
        return arguments[0] +arguments[1];
    }else{
        return function(b){
            return a+b;
        }
    }
}

console.log(sum(1,2));
console.log(sum(1)(2));