// EXTEND 

var extend = function () {
    if (arguments.length === 1) {
        return arguments[0]
    }else{
        for(var i=1;1<arguments.length;i++){
            var obj = arguments[i];
            for(var key in obj){
               arguments[0][key] = obj[key];
            }
        }

        return arguments[0];
    }
}


var obj1 = {
    fName: 'vittal',
    mName: 'something'
}

var obj2 = {
    lName: 'Kamkar'
}

var obj3 = {
    address: '100 feet road'
}


console.log(extend(obj1, obj2, obj3));