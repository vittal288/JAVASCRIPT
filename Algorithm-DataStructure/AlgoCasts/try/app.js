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

console.time('capitalize');
function capitalize(str) {
    const words =[];
    if (typeof str !== 'string') {
        // throw 'Please pass a string as argument !!';  
         return false;
    } else {        
        for(let word of str.split(" ")){           
           words.push(word[0].toUpperCase() + word.slice(1));
        }        
        return words.join(" ");
    }
}
console.timeEnd('capitalize');

// console.log(removeDuplicates([1,1,2,3,2,3]));
capitalize('some thing is new one !!');