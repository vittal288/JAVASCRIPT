// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// solition ONE
// function reverse(str) {
//     const strArr = str.split(""); // ['a','b','c','d']
//     const reverseStrArr =[];   
//     for (var i = strArr.length; i >= 0; i--) {
//         reverseStrArr.push(strArr[i]) // ['d','c','b','a']
//     }
//     return reverseStrArr.join(""); // dcba
// }

// // solution TWO
// function reverse(str) {

//     return str.split("").reverse().join(""); // ['a','b','c','d'].['d','c','b','a'].dcba
// }



// SOLUTION THREE 
function reverse(str){
    var reversed = '';
    for(let char of str){
        reversed = char+reversed;       
    }
    return reversed;
}

// SOLUTION FOUR 
// function reverse(str){
//     // reduce() method will operate on Array and returns and condensed string
//     //  reduce() method will runs only one time and reversed parameter contains a reversed string but explcuding last char so we are adding with char finally!!
//     return str.split("").reduce((reversed, char)=>{
//         return char+reversed;
//     },'');
// }

// reverse('vittal');

module.exports = reverse;
