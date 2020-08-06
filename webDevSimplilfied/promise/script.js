// promise idea 
let promise = new Promise((resolve, reject) => {
  let a = 1 + 2;
  if (a === 3) {
    resolve("Success");
  } else {
    reject("Failed");
  }
});

promise
  .then((message) => {
    console.log("In then block", message);
  })
  .catch((message) => {
    console.log("In catch block", message);
  });


  //--- Normal call back 

const userLeft = true;
function sampleFn(successCB, errorCB){

    if(userLeft){
        errorCB('user-left')
    }else{
        successCB('user not left');
    }
}


sampleFn( message=>{
    console.log('SUCCESS' , message);
},message=>{
    console.log('FAIL', message);
});

// converted to promise 

function sampleFnPromise(){
    return new Promise((resolve, reject)=>{
        if(userLeft){
            resolve('user-left')
        }else{
            reject('user not left');
        }
    })
}


sampleFnPromise().then(message=>{
    console.log('PROMISE SC', message);
}).catch(error=>{
    console.log('PROMISE FAIL', error);
})


//------------promise.all-----------------------
const promise1 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve('Promise 1 is resolved');
    }, 1000)
});
const promise2 = new Promise((resolve, reject)=>{
    resolve('Promise 2 is resolved');
});
const promise3 = new Promise((resolve, reject)=>{
    resolve('Promise 3 is resolved');
});

// all, wait till promise will get resolve 
Promise.all([promise1,promise2,promise3]).then(success=>{
    console.log('Resolving all promised at a time', success);
})

// race, will resolve only which is resolved for the first 
Promise.race([promise1,promise2,promise3]).then(success=>{
    console.log('Resolving one promised at a time', success);
})