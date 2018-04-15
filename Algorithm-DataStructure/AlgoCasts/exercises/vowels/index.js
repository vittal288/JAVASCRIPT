// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0


// SOLUTION 1 ITERATIVE 
// function vowels(str) {
//     let counter = 0;
//     const enums = ['a', 'e', 'i', 'o', 'u'];
//     const chars = "aeiou";

//     const mStr = clearString(str);
//     for (let i = 0; i <= mStr.length; i++) {
//         // for( let v of enums){
//         //     if(v === mStr[i]){
//         //         counter++
//         //     }
//         // }      
        
//         // OR

//         // if(enums.includes(mStr[i])) counter++

//         // OR
//         if (chars.includes(mStr[i])) counter++
//     }
//     return counter;
// }

// // removes special charectors, spaces and converts to lower cases 
// function clearString(str) {
//     return str.replace(/[^\w]/g, '').toLowerCase();
// }


// SOLUTION with REG EXPRESSION


function vowels(str){

    const matches = str.match(/[aeiou]/gi);
    // [] --> matches string which in bracket to the string "str";
    // g --> do scan for entire string rather than breaking if macth found in first char
    // i --> in-sensitve, 
    // if matches founds then it retruns an array or returns  a null value 

    return matches ? matches.length : 0;
}

module.exports = vowels;
