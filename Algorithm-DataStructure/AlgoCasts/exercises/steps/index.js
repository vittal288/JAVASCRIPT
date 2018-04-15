// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'


// SOLUTION with 2D matrix 
function steps(n) {
    if (n < 0) {
        return false;
    }
    // 2D array matrix solution 
    for (row = 0; row < n; row++) {
        let stair = '';
        for (col = 0; col < n; col++) {
            if (col <= row) {
                stair += '#';
            } else {
                stair += ' ';
            }
        }
        console.log(stair);
    }
}



// SOLUTION 2 with Recursive approach 
// for this solution, please psedo code of this solution in solution-2.png
function steps(n,row=0,stair = '') {
    if ( n === row) {
        return;
    }    

    // end of row currently working 
    if (n === stair.length) {
        console.log(stair)
        // end of this row and creating an new row 
        return steps(n,row+1)
    }

    if (stair.length <= row) {
        stair += '#';
    } else {
        stair += ' ';
    }    
    
    //column iteration of current working row 
    steps(n,row,stair);
}
module.exports = steps;
