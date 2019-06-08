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

/*
input array:
const arr = [
  { id: 1, name: "king" },
  { id: 2, name: "master" },
  { id: 2, name: "Sample" },
  { id: 3, name: "lisa" },
  { id: 4, name: "ion" },
  { id: 4, name: "ionic" },
  { id: 10, name: "glow" },
  { id: 10, name: "hd-glow" }
];

output array:

const arr = [
  { id: 1, name: "king" },
  { id: 2, name: "master" },
  { id: 3, name: "lisa" },
  { id: 4, name: "ion" },
  { id: 10, name: "hd-glow" }
];
*/

// function removeDuplicates(arr, key) {

//     const unique = arr
//          .map(e => e[key])
  
//        // store the keys of the unique objects
//       .map((e, i, final) => final.indexOf(e) === i && i)
  
//       // eliminate the dead keys & store unique objects
//       .filter(e => arr[e]).map(e => arr[e]);
  
//      return unique;
// }

module.exports = removeDuplicates;



