// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'



// SOLUTION 1
// console.time('capitalize');
// function capitalize(str) {
//     if (typeof str !== 'string') {
//         // throw 'Please pass a string as argument !!';  
//         return false;
//     } else {
//         var strArr = str.split(" ");
//         for (let i = 0; i < strArr.length; i++) {
//             var firstChar = strArr[i].charAt(0);
//             strArr[i] = strArr[i].replace(firstChar, firstChar.toUpperCase());
//         }
//         return strArr.join(" ");
//     }
// }
// console.timeEnd('capitalize');





// SOLUTION 2 using string.slice()
// for example There.slice(1) --> here


// function capitalize(str) {
//     const words =[];
//     if (typeof str !== 'string') {
//         // throw 'Please pass a string as argument !!';  
//          return false;
//     } else {        
//         for(let word of str.split(" ")){           
//            words.push(word[0].toUpperCase() + word.slice(1));
//         }        
//         return words.join(" ");
//     }
// }


// SOLUTION 3
// 1. Iterate with entire string using for loop 
// 2. If each char's left or previous to current char is a space then replace that charactor with uppercase
// 3. Above approach fails for first char of entire string, so we replacing on the first line of code using hard coded index

function capitalize(str) {
    if (typeof str !== 'string') {
        // throw 'Please pass a string as argument !!';  
        return false;
    }
    let resultStr = str[0].toUpperCase();
    // looping from 2nd charactor 
    for (var i = 1; i < str.length; i++) {
        // to find out the left space of char  or previous char of current char
        if (str[i - 1] === ' ') {
            resultStr += str[i].toUpperCase();
        } else {
            resultStr += str[i];
        }
    }
    return resultStr;
}

module.exports = capitalize;
