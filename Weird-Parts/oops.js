var person ={
    firstName: 'default',
    lastName: 'default',
    getFullName: function(){
        return this.firstName +' '+this.lastName;
    }
}


var vittal ={
    firstName:'vittal',
    lastName:'Kamkar',
}


// Never do this EVER , only for DEMO 

// accessing properties and methods from other object with proto object 
vittal.__proto__ = person;
console.log(vittal.getFullName());

// the o/p -->vittal but why not default?
//  this is because of proto chain, first firstName key will search in vittal object then chain to its proto object 
console.log(vittal.firstName);


var sandy ={
    firstName:'Sandesh'
}

sandy.__proto__ = person;
console.log(sandy.getFullName());


// REFLECTION , we are reflecting on vittal's object 
// Scanning of all propeties of an object which is passed inside to a function and iterate through each object and the needful
// --> an Object can look at itself, listing and changing its properties and methods called reflection
// below is the example of reflection ; scanning of vittal object and iterate through a prop
for (var prop in vittal){
    if(vittal.hasOwnProperty(prop)){
        console.log("REFLECT" , prop+':' +vittal[prop]);
    }
}


// EXTEDNING 
//--> Merging of all other object's properties and methods into one object called extend 

var jane ={
    firstName:'JANE',
    getFormalFullName:function(){
        return this.firstName+' '+this.lastName;
    }
}

var jim ={
    addreess:'100 feet road, banglore'
}

var extenededObj = _.extend(vittal,jane,jim);
console.log("EXTEND", extenededObj);

// NOTE: Build your own extend method by reffering undercore library 