// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

// Each index of array is the level of tree and it indicates how many nodes are present inside each level 

function levelWidth(root) {

    let arr = [root, 's'];
    let counters = [0];

    while (arr.length > 1) {

        let node = arr.shift();

        if (node === 's') {
            // end of tree level 
            counters.push(0);
            arr.push('s');
        } else {
            // if we are working with actua node
            arr.push(...node.children);
            counters[counters.length - 1]++
        }
    }
    return counters;
}

module.exports = levelWidth;
