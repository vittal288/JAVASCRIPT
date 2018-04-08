function removeDuplicates(arr) {
    // debugger;
    // // this will create a new array with different memory 
    // const clonedArr = arr.slice(0);
    
    // for (let i = 0; i <= arr.length; i++) {
    //     for (let j = i; j <= arr.length; j++) {
    //         if (arr[i] === arr[j]) {
    //             clonedArr.splice(i, 1); //[1,2,3,2,3]
    //         }
    //     }
    // }   
    // return clonedArr;

    return arr.filter((item,index)=>{
        return arr.indexOf(item) === index; //1===1 
    });
}

console.log(removeDuplicates([1,1,2,3,2,3]));