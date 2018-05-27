// Consolidate below array items into one array 
// var givenArray = ['1','2','3',[[4,5,6]],[[[['do this']]]]];
// output --> ['1','2','3',4,5,6,'do this]

const resultArr = [];
var clonedArr = [];
function iterateAnArray(arr) {
    //clone the array 
    clonedArr = [...arr] // arr.slice(0); 
    clonedArr.forEach(item => {
        if(typeof item !== 'object'){
            resultArr.push(item);
        }else{
            iterateAnArray(item)
        }
    });
    return resultArr;
}

module.exports = iterateAnArray;