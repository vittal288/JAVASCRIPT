// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false


// SOLUTION TWO using every() method 
function palindrome(str){
    // using every method of array 
    // every() method return true if all condition yelilds true or returns a false 
    // every() method returns false if all conditions yeilds  as false  or returns true 

    return str.split("").every((char,i)=>{
        // here we are comparing first element of array and last element of array and repeats same till it completes entire array elements 
        // if below conditions returns true for all comparison then every method returns true 
        return char === str[str.length -1 -i];
    })

}



// SOLUTION ONE 
// function palindrome(str) {        
//     return str === reverseString(str) ? true :false;
// }

// function reverseString(str){   
//     return str.split("").reverse().join("");
// }

module.exports = palindrome;
