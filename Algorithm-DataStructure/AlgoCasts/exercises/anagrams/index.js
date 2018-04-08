// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False


// SOLUTION 1
// 1. Convert given string to lowercase by removing all special charectors and spaces
// 2. Generate charp map from original  string 
// 3. compare char maps  of both strings 
// 4. if both are identical then given strings are anagrams 

// function anagrams(stringA, stringB) {   
//     console.log(manupulateStr(stringA));
//     if (manupulateStr(stringA).length !== manupulateStr(stringB).length) {
//         return false
//     }
//     var charMapA = genrateCharMap(stringA);
//     var charMapB = genrateCharMap(stringB);    
//     for (let  key in charMapA) {
//         if(charMapA[key] !== charMapB[key]){
//             return false
//         }       
//     }
//     return true;
// }

// function manupulateStr(str) {
//     return str.replace(/[^\w]/g, '').toLowerCase();
// }

// function genrateCharMap(str) {
//     var charMap = {};
//     // var arrStr = str.split("");
//     // for(let i=0;i<arrStr.length;i++){         
//     //     if(charMap.hasOwnProperty(arrStr[i])){           
//     //         charMap[arrStr[i]] =charMap[arrStr[i]]+1;           
//     //     }else{            
//     //         charMap[arrStr[i]] = 1;
//     //     }       
//     // }

//     // OR
//     for (let char of str) {
//         charMap[char] = charMap[char] + 1 || 1;
//     }
//     return charMap;
// }



// SOLUTION 2
// 1. Convert given string to lowercase by removing all special charectors and spaces
// 2. Convert those string to an Array and sort alphebetically 
// 3. The compare the two strings , if it is equal then given string are anagram 


function anagrams(stringA, stringB){
    const strArrA = cleanUpString(stringA).split("").sort().join('');
    const strArrB = cleanUpString(stringB).split("").sort().join('');
        
    return strArrA === strArrB; // true or false 
}



// Convert given string to lowercase by removing all special charectors and spaces
// Whoa! Hi! --> whohi
function cleanUpString(str){
    return str.replace(/[^\w]/g,'').toLowerCase();
}

module.exports = anagrams;
