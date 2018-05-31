# JAVASCRIPT ARRAY METHODS 
### Definition:
Reduce method : It accumulates all values and yield an one value OR reduce method reduces all array value to one 
### reduce method syntax

``` 
arr.reduce((accumulator,current,index,arr)=>{
    return accumulator+current
});

// Example
var arr = [1,2,3,4,5,8]
arr.reduce(function(accumulator,current){
	return accumulator+current;
});

// outputs the sum of array i.e 23

```