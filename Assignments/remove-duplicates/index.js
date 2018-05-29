// remove duplicates from the array or find out duplicates
//Given Array = [1,2,1,2,'hi','Hi','hello','hello','1',4,5] 
// outout -->[1,2,'hi','Hi','hello','1',4,5]

function removeDuplicates(arr) {
    let charMap = {};
    let resArr =[];

    // convert all array items into charector mapping  
    for (let item of arr){
        if (charMap[item]) {
            charMap[item]++
        } else {
            charMap[item] = 1;
        }
    }

    // convert an object into an array 
    for(let item in charMap){
        resArr.push(item);
    }
    
    return resArr;
}

module.exports = removeDuplicates;