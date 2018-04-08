// -- Directions , remove duplicates from an array 
// [1,1,2,3,2,3] --> [1,2,3]

// [1,'1','2','2',3,4,'4','5',6,7,7,9] -->[1,'1','2',3,4,'4','5',6,7,9]
// ['hello','hello','olleh',1,'1',1,2,3] --> ['hello','olleh',1,'1',2,3]


function removeDuplicates(arr) {
    // this will create a new array with different memory 
    // const clonedArr = arr.slice(0);

    // for (let i = 0; i <= arr.length; i++) {
    //     for (let j = i; j <= arr.length; j++) {
    //         if (arr[i] === arr[j]) {
    //             clonedArr.splice(i, 1); //[1,2,3,2,3]
    //         }
    //     }
    // }   
    // return clonedArr;

    //[1,1,2,3,2,3]
    //Basically, we iterate over the array and, for each element, 
    //-->check if the first position of this element in the array is equal to the current position.
    //-->Obviously, these two positions are different for duplicate elements.
    return arr.filter((item,index)=>{
        console.log(item, index);
        return arr.indexOf(item) === index;
    })
}

module.exports = removeDuplicates;