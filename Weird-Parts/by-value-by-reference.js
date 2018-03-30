// by value (primitive types) 
var a =3;
var b;

// here , in memory a will point to different memory aX001 and b point to different memory i.e aX002
// --> hence two copies will create here 
b=a;

a=2;
console.log(a);
console.log(b);

// o/p--> a = 2
// o/p --> b= 3;

// BY REFERENCE (all objects including functions)
var c = {greeting:'hii'};

// c and d variables will share the same memory locations , hence mutating c will update behind the seen d also 
var d = c;


c.greeting = "hello"; // mutating c object 

console.log(c);
console.log(d);

// o/p--> c, {greeting:'hello'}
// o/p--> d, {greeting:'hello'}

// by reference(even as a parameter) // inside function we are mutating same memory location 
function changeGreeting(obj){
    obj.greeting ="Hola!";
}

changeGreeting(d);
console.log(c);
console.log(d);

// o/p--> c, {greeting:'Hola'}
// o/p--> d, {greeting:'Hola'}


// EQUAL OPERATOR set up new memory space (new address)
c = {greeting:'howdy'};
console.log(c);
console.log(d);

