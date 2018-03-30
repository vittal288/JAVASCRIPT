// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9


// SOLUTION THREE 
function reverseInt(n){
    const reversed = n.toString().split("").reverse().join("");

    // Math.sign(if_negetive_no) then returns -1 
    // Math.sign(if_postive_no) then return +1
    return parseInt(reversed) * Math.sign(n);
}

// SOLUTION TWO 
// function reverseInt(n) {
//     const reversed = n.toString().split("").reverse().join("");
//     if (n < 0) {
//         return parseInt(reversed) * -1;
//     }
//     return parseInt(reversed);
// }

// SOLUTION ONE 
// function reverseInt(n) {
//     if( n === 0){
//         return n;
//     }
//     else if (n > 0) {
//         var intToStr = n.toString();
//         return parseInt(intToStr.split("").reverse().join(""));
//     }else{

//         var intArr = n.toString().split(""); // [-,5,1]
//         var convertedStr = '';
//         for(var i=intArr.length-1;i>=1;i--){           
//             convertedStr = intArr[i]+convertedStr; // 15
//         }
//         return parseInt(convertedStr.split("").reverse().join(""))*-1;
//     }
// }

module.exports = reverseInt;
