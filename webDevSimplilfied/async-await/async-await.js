function makeRequest(location) {
  return new Promise((resolve, reject) => {
    console.log(`Making Request to ${location}`);
    if (location === "Google") {
      resolve("Google says hi");
    } else {
      reject("We can only talk to Google");
    }
  });
}

function processResponse(response) {
  return new Promise((resolve, reject) => {
    console.log("Processing response");
    resolve(`Extra Information  ${response}`);
  });
}

// async code with promise
// makeRequest("Google")
//   .then((response) => {
//     console.log("response is received");
//     return processResponse(response);
//   })
//   .then((processedResponse) => {
//     console.log(processedResponse);
//   })
//   .catch((error) => {
//     console.log("Error", error);
//   });

// with async await
async function doWork() {
  // try catch block will used to handle the promise reject scenario 
  try {
    // it will resolve the promise
    const response = await makeRequest("Facebook");
    console.log("response is received");
    const processedResponse = await processResponse(response);
    console.log(processedResponse);
  }catch(err){
    console.log(err);
  }
}

doWork();
