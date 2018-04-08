// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
    var chunked =[];   
    if(array.length < size){
        return array;
    }else{       
        for(var i=0;i<array.length;i+size){             
            var chunk = array.splice(i,size);
            chunked.push(chunk);
        }
    }
    return chunked;
}

function chunk2(array,size){
    console.time('chunk2 test');
    const chunked =[];
    // chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]    
    for(let element of array){
        const last = chunked[chunked.length -1]; // [1]
        if(!last || last.length === size){
            chunked.push([element]); // [[1]]
        }else{
            last.push(element) //[[1,2],[3,4]]
        }
    }
    console.timeEnd('chunk2 test')
    return chunked;
}

function chunk3(array,size){
    const chunked =[];
    let index=0;
    while(index<array.length){
        chunked.push(array.slice(index,index+size));
        index += size;
    }
    return chunked;
}

module.exports = chunk3;
