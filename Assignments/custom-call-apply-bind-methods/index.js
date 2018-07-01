
// custom call method implementation 
window.Function.prototype.customCall = function(){
    const func = this;
    var arr =[];
    for(var i=1;i<arguments.length;i++){
        arr.push(arguments[i]);
    }
    // console.log(...arr)
    return func.call(arguments[0],...arr);
}

// custom apply method implementaion 
window.Function.prototype.customApply = function(){
    const arr =[];
    for(var i=1;i<arguments.length;i++){
        arr.push(arguments[i]);
    }
    const fun = this;
    return fun.apply(arguments[0],...arr);
}


// custom bind method implementation 
window.Function.prototype.customBind = function(){
    const fun = this;
    return function(){
        return fun.apply(arguments[0]);
    }
}




function sample(){
    this.getName = function(name,lname){
        console.log(name,lname)
        return this.name;
    }
}

const instance = new sample('vittal');
var obj ={
    name:'vittal2'
};


console.log(instance.getName.customCall(obj,'a','b'));
// console.log(instance.getName.customApply(obj,['a','b']));
// console.log(instance.getName.customBind(obj)());

