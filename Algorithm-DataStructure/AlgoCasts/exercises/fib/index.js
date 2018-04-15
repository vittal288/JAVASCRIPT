// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3


// SOLUTION with ITERATIVE 
// function fib(n) {
//     const fibArr = [0, 1];
//     for (var i = 2; i <= n; i++) {
//         var len = fibArr.length;
//         fibArr.push(fibArr[len - 2] + fibArr[len - 1]);
//     }
//     console.log(fibArr);
//     return fibArr[n];
// }


// function fib(n) {
//     const result = [0, 1];
//     for (let i = 2; i <= n; i++) {       
//         const a = result[i - 1];
//         const b = result[i - 2];
//         result.push(a + b);
//     }
//     return result[n];
// }


// SOLUTION with RECURSIVE
// and it takes the lot of time to execute and run time complexity is exponential 

// HOW TO IMPROVE, its run time run time complexity : Memoization 
// store the result of fib function to some memory or cache  if fib is called with same parameter in recursive method 

function memoize(fn) {
    let cache = {};

    return function (...args) {       
        // if cache object has same data then return that
        if (cache[args]) {
            return cache[args]
        }

        // apply method will invoke the fn function by changing the reference of this object to args arguments object 
        // args is an array so we using apply method other we would have used call() method 
        const result = fn.apply(this, args);
        cache[args] = result;      
        return result;
    };
}


function slowFib(n) {

    if (n < 2) {
        return n;
    }

    // but after memoize implementation, these two function will poining to memoized function not the original version due apply method 
    return fib(n - 1) + fib(n - 2);
}

const fib = memoize(slowFib);

module.exports = fib;
