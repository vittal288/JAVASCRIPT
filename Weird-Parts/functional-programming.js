var arr1 = [1,2,3];


console.log(arr1);
var arr2 =[];
for(var i=0;i<arr1.length;i++){
    arr2.push(arr1[i]*2);
}
console.log(arr2);




// functional programming implementation
function mapForEach(arr, fn){
    var newArr =[];
    for(var i=0;i<arr.length;i++){
        newArr.push(
            fn(arr[i])
        )
    }
    return newArr;
}

var arr2 = mapForEach(arr1,function(item){
    return item*2;
});

console.log(arr2);


var arr3 = mapForEach(arr1,function(item){
    return item >2
});
console.log(arr3)


var checkPastLimit = function(limiter,item){
    return item > limiter;
}

// using bind() method we restricting limiter parameter always pont to 1
var arr4 = mapForEach(arr1,checkPastLimit.bind(this,1));
console.log('ARRAY 4', arr4);


var checkPastSimplified = function(limiter){
    return function(limiter,item){
        return item >limiter;
    }.bind(this,limiter);
}

var arr5 = mapForEach(arr1,checkPastSimplified(2));
console.log('ARR 5',arr5);




// UNDERSCORE JS
var arr6 = _.map(arr1,function(item){return item*3});
console.log(arr6);

var arr7 =  _.filter([1,2,3,4,5],function(item){
    return item % 2 === 0
});

console.log(arr7);