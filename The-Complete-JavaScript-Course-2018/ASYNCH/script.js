// @@@@@ ASYCH Programming in JS

/*
const second = ()=>{
    setTimeout(()=>{
        console.log('Asynch Hi There !!!');
    },2000);
}

const first = ()=>{
    console.log('Hi There !!!');
    second();
    console.log('The End');
}
first();

*/

// @@@@ callback hell with ASYNCH JS 
/*
const getRecipe = () => {
    setTimeout(() => {
        const recipesID = [532, 456, 678];
        console.log(recipesID);

        setTimeout((id) => {
            const recipe = {
                title: 'Fresh Tomato Pasta',
                publisher: 'Vittal'
            };
            console.log(`${id} and recipe ${recipe.title}`);
            setTimeout((publisher) => {
                const recipe2 = {
                    title: 'Italian Pizza',
                    publisher: 'Vittal'
                };
                console.log(`${publisher} and ${JSON.stringify(recipe2)}`);
            }, 1500, recipe.publisher)
        }, 1000, recipesID[2]);

    }, 1500);
}
getRecipe();

*/





/*

// @@@@ PROMISES 

const getIDs = new Promise((resolve, reject) => {
    // simulating async flow 
    setTimeout(() => {
        //in resolve method promise will full-fill.
        resolve([532, 456, 678])

        // in reject method, promise will also completes but it failed but could not full-filled 
        // reject([1,2,3])
    }, 1500);
});

const getRecipe = recipeID => {
    return new Promise((resolve, reject) => {
        setTimeout((id) => {
            const recipe = {
                title: 'Fresh Tomato Pasta',
                publisher: 'Vittal'
            };
            resolve({id,recipe});
        }, 1500, recipeID);
    });
};

const getRelated = publisher => {
    return new Promise((resolve, reject) => {
        setTimeout((pub) => {
            const recipe2 = {
                title: 'Italian Pizza',
                publisher: 'Vittal'
            };
            resolve(`${pub}:  and ${JSON.stringify(recipe2)}`);
        }, 1500, publisher)
    });
}

*/

// how to subscribe the promise data 
// chaining promises 
/*
    getIDs  
    .then(ids => {
        console.log('Promise data', ids);
        return getRecipe(ids[2]);
    })
    .then(recipe => {
        console.log(`${recipe.id} : ${recipe.recipe.title}`);
        return getRelated(recipe.recipe.publisher);
    }).
    then(recipe => {
        console.log('Pulisher', recipe);
    })
    .catch(error => {
        console.log('Error', error);
    })
*/



/*
// @@@ ASYNC and AWAIT: ES8 feature and designed for to consume the promises 

// async function will return always promise 
async function getRecipeAW(){
    const ids = await getIDs;
    console.log(ids);

    const recipes = await getRecipe(ids[2]);
    console.log(recipes.recipe);

    const recipe2 = await getRelated(recipes.recipe.publisher);
    console.log(recipe2);

    // returns an promise 
    return recipes;
}

const prom = getRecipeAW();
prom.then((data)=>{
    console.log(data);
})
.catch((err)=>{
    console.log(err);
});


*/


// AJAX and FETCH
/*
function getWeather(woeid){

    // fetch method returns and error 
    const weatherInfo = fetch(`https://crossorigin.me/https://google.com/https://www.metaweather.com/api/location/${woeid}`);
    
    weatherInfo
        .then((result) => {
            // console.log(result);// output is JSON we have to convert back to JS object as shown below
    
            // conversion from JSON to JS object takes time so it executes asynchrounsly and it returns an promise 
            return result.json();
    
        })
        .then(data => console.log(data))
        .catch(error => console.log('ERROR', error));
}

getWeather(2487956);
getWeather(44418);

*/



// using ASYNC and AWAIT
function getGITHubReposAWPromise(keyword){
    // fetch method returns and error 
    return fetch(`https://api.github.com/search/repositories?q=angular/${keyword}`);

}


// async function always return an promise
async function getGITHubReposAW(keyword){
    let anyRepo =0;
    try{
        // this will return an JSON data 
        const results = await getGITHubReposAWPromise(keyword);
        
        // results.json() converts JSON data to JS object asynchronously 
        const repos  = await results.json();
        console.log(`Github database has ${repos.total_count} repositories which are related to ${keyword}`);
        return repos.items[0];
    }catch(err){
        console.log('Error ', err);
    }
}

getGITHubReposAW('Angular').then((result)=>{
    console.log(`Details about first repository ID: ${result.id} and number of forks on this repo are ${result.forks}`);
})
.catch(err => console.log(err));


getGITHubReposAW('NodejS').then((result)=>{
    console.log(`Details about first repository ID: ${result.id} and number of forks on this repo are ${result.forks}`);
})
.catch(err => console.log(err));