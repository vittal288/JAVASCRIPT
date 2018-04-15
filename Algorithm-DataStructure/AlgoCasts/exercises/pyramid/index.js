// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'


// SOLUTION 1 with LOOP
// function pyramid(n) {
//     if (n <= 0) {
//         return;
//     }

//     // find out the no of columns should be present in the matrix 
//     var colCnt = 2 * n - 1;
//     // find a midpoint of the current row , then you can add '#' to the left and right of midpoint of row to construct that pattern
//     const midpoint = Math.floor((2 * n - 1) / 2);

//     for (let row = 0; row < n; row++) {
//         let level = '';

//         for (let col = 0; col < colCnt; col++) {
//             // adding '#' to the left and right's of midpoint of that row 
//             if (midpoint - row <= col &&  midpoint + row >= col) {
//                 level += '#';
//             } else {
//                 level += ' ';
//             }

//         }
//         console.log(level);
//     }
// }




// SOLUTION 2 with RECURSION 
// recursion will repet for each loop 
function pyramid(n, row = 0, level = '') {

    // find base case to return from recursion 
    if (n === row) {
        return
    }

    // find the condition to end of each row and invoke pyramid() for new row
    const colCnt = 2 * n - 1;

    // here, level.length will always gives the current column
    if (level.length === colCnt) {
        console.log(level);
        // call the recursion for next row 
        pyramid(n, row + 1);
        return;
    }


    // here, we are still working on same row 
    // finding a midpoint of a row 
    const midpoint = Math.floor((2 * n - 1) / 2);
    // adding '#' to the left and right's of midpoint of that row 
    let col = level.length;
    if (midpoint-row  <= col && midpoint+row >= col ){
        level += '#'
    }else{
        level += ' ';
    }

    pyramid(n,row,level);
}

module.exports = pyramid;
