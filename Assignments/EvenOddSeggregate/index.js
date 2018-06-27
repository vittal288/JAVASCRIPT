/*
Reorder the given array as following passion (right side even element and odd elements left side)
without using temporary array 

GIVEN ARRAY [1,2,4,5,7,9,6]
O/p --> [1,5,7,9,2,4,6]

*/


function segregateArray(arr) {
    var j = arr.length;
    const arrlen = j;
    var temp;
    for (var i = 0; i < arr.length; i++) {
        j--;
        if (arr[i] % 2 === 0) {
            temp = arr[j];
            arr[j] = arr[i];
            arr[i] = temp;
        }
    }

    const arrHalfLength = Math.floor(arr.length / 2);
    return sort(arr.slice(0,arrHalfLength)).concat(sort(arr.slice(arrHalfLength,arrlen)));
}


// sort array in ascending order 
function sort(arr) {
    return arr.sort((a, b) => {
        return a - b;
    })
}


// console.log(segregateArray([1,2,4,5,7,9,6,44,0,79,8]));

module.exports = segregateArray;
