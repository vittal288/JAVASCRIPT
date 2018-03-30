//@@ this code has been tested in brower console of GC @@@@//



//@@@@ INHERITANCE USNG CLOSURES @@@@@/

//Scenario  or design : Baseclass or superclass is CAR and having name and drive are two methods. SUPERCAR which is inherited from base class CAR and implementing new feature called FLY and also know DRIVE


//declare base class CAR
function Car(name){
  this.name = name;
  this.drive = Drive;
}


//to be used as Drive method of car
function Drive(){
    console.log('Hi There I am '+this.name+'I am driving the car')
}


//declare derived class SUPERCAR
function SuperCar(name){
    
  //implement closure inheritance 
  this.inheritedFrom = Car;
  this.inheritedFrom(name);
  
  //supercar knows how to fly 
  this.Fly = Fly;
 
}

//fly method used for SUPERCAR class
this.Fly = function(){
  console.log('Hi Ther I am '+this.name+'I am flying');
}


var car = new Car('vittal');
car.drive();


var superCar = new SuperCar('Vittal Kamkar');
superCar.drive();
superCar.Fly();






//--------------------------------------------------------------------------------------------------------

//@@@@ INHERITANCE USNG PROTOTYPE @@@@@/
//define base class Car
/*
function Car(name){
  this.name  = name;
  this.drive = Drive;
}
//define Drive method
function Drive(name){
   console.log('Hi There I am '+ this.name+ ' I am driving CAR');
}


//define sub class called SuperCar
function SuperCar(name){  
  // call base class constructor
  console.log('I am driving SUPERCAR !!!');
  Car.call(this,name);  
}

//inherit base class property to SUPERCAR
//SuperCar.prototype = new Car();

//Assign back the constructor of SuperCar to SuperCar , because above code snippet will override the constructor of SuperCar to Car
//SuperCar.prototype.constructor = SuperCar;
var superCar = new SuperCar('vittal');
superCar.drive();



//SuperCar.fly method 
SuperCar.prototype.fly = function(){
  console.log('Hi There I am ' + this.name + 'I am Flying !!!');	  
}

//create instance of Car
var car = new Car('Vittal');
car.drive();

//create instance of superCar
var superCar = new SuperCar('Vittal');
superCar.drive();
superCar.fly();
  
*/
