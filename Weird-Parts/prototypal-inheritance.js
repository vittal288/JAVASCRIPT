// polyfill, if older or newer browser does not supports any line of code, then we have to native code make that work 
// here, we are writing pollyfill for  Object.create method

if(!Object.create){
    Object.create = function(o){
        if(orguments.length > 1){
            throw new Error('Object.create implementation only accepts the first parameter');            
        }
        function F(){}
        F.prototype =o; //we are overriding, prototype of emprty function to passing object, called in heritance 
        return new F();
    };
}

var person ={
    firstname:'Default',
    lastname:'Default',
    greet:function(){
        return 'Hii'+ this.firstname; // if you forget to add this, here then firstname key will be searched in 
                                      // that function scope and if not found, it will search in next upper level scope that global , hece through an error 
                                     // NOTE: Object will not create an execution context , so firstname will be searched in that object 
    }
}


var john = Object.create(person);// creates an empty base object with protype 
// john will be an empty object but all properties will be hidden in __proto__ object 

john.firstname ='Vittal'; // here , we are hiding or overriding the existing values of an empty object
                          // -->called inheritance 
john.lastname = 'Kamkar'// here , we are hiding or overriding the existing values of an empty object

console.log(john);