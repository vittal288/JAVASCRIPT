console.log(this)
// this point to global object called window 

function a(){
    console.log(this);// this point to global object called window 

    this.newVariable ="hello"; // here we creating a variable in global context 
}

a();
var b = function (){
    console.log(this); // this point to global object called window 
}

b();

console.log(newVariable);// we can access directly by name from global context 

// VARIANT TWO of this 

var c ={
    name:'c object',
    log:function(){
        var self = this;
        c.name="updared C object";
        // inside, whenever a method of an object , this--> will point to parent object 
        console.log(this);

        // here this is pointing to global context since whenever function execution context created 
        setName = function(newName){
            this.name =newName; 
        }
        setName('updated c again !!!');
        console.log(this);


        setName2 = function(newName){
            self.name = newName
        };

        setName2('updated C object again !!!');
        console.log(self);
    },
    // d:{
    //     log2:function(){
    //         console.log(this);
    //     }
    // }
}

c.log();
// c.d.log2();