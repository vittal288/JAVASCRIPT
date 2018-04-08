var util = new v$();

var arr = [1,2,3,4,4,5,6,6,{name:'vittal'}];
console.log('V$', util.chunk(arr,2)); //0.042236328125ms

// console.log('V$', util.chunk2(arr,2)); //0.071044921875ms

console.log('Pallindrome', util.palindrome('1221212313121'));