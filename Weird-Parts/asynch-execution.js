// long running function 
function waitforThreeSeconds(){    
    var ms = 10000+new Date().getTime();
    while(new Date() < ms){
        // time waisting loop 
    }
    console.log('Execution Stack Event ONE, Finished Function !!!')
}

// this is asynchronous function , will execute once all the stack items get clear 
document.addEventListener('click',()=>{
    console.log('Asynchronous function is Executed from Event Queuee, once Execuation STACK popped up all events');
})


waitforThreeSeconds();
console.log('Execution Stack Event TWO, Finishes Execution and Cleared All STACK ITEMS !!');
