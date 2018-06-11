// remove duplicates from the array or find out the duplicates


// this from array or array of collections 
function removeDuplicates(arr, prop) {


    // USING ES6
    // SOLUTION 1 using charMap with ES6 map data structure 
    // 1. create char map  out of array (if same element then increase the count of it in  or create a new key in map)
    // 3. then convert char map object to an array 
    // 4. Run time complexity is 2n times 

    if (prop === undefined) {
        var uniqueArr = [];
        let charMap = new Map();
        arr.forEach((item) => {
            if (charMap.has(item)) {
                let value = charMap.get(item);
                charMap.set(item, value++);
            } else {
                charMap.set(item, 1);
            }
        });

        // convert object keys  to array 
        charMap.forEach((value, key) => {
            uniqueArr.push(key);
        });
        return uniqueArr;

    } else {
        for(var i=0;i<arr.length -1 ;i++){
            if (arr[i][prop] === arr[i + 1][prop]) {
                arr.splice(i, 1);
            }
        }
        return arr;
    }

}

module.exports = removeDuplicates;



