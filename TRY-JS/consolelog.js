// TRICK 1
// check how much time has taken to execute the below code snippet within console statement 
console.time('looper');
for(var i= 0;i<100;i++){
    var j = i+1;
}
console.timeEnd('looper');


// TRICK 2
// use object destructuring for reading object paramter 

// TRICK 3 : you can string method in this way as well 
function horseAge(str, age){
    console.log(str);
    const ageStr = age > 5 ? 'old' : 'young';
    return `${str[0]} ${age} years ${ageStr}`;
}

const bio2= horseAge `This horse is ${8}`;
console.log(bio2);


