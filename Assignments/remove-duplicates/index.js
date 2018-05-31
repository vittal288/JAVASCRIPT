// remove duplicates from the array or find out the duplicates

function removeDuplicates(arr) {


    // USING ES6
    // SOLUTION 1 using charMap with ES6 map data structure 
    // 1. create char map  out of array (if same element then increase the count of it in  or create a new key in map)
    // 3. then convert char map object to an array 
    // 4. Run time complexity is 2n times 

    var uniqueArr = [];
    let charMap = new Map();

    arr.forEach(item => {
        // same element, then increase the count of it 
        if (charMap.has(item)) {
            let value = charMap.get(item);
            charMap.set(item, value++);
        } else {
            charMap.set(item, 1);
        }
    });


    charMap.forEach((value, key) => {
        uniqueArr.push(key);
    });
    return uniqueArr;
}

// removeDuplicates([1, 2, 2, 3, '3', 3, 4, '4', 5, 6, 7, 8, 8]);
module.exports = removeDuplicates;