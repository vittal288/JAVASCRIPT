function makeGreetingFactory(language){
    return function(firstname,lastname){
        if(language === 'en'){
            console.log('Hello ', firstname + ' ' +lastname)
        }
        if(language === 'es'){
            console.log('Hola ', firstname + ' ' +lastname)
        }
    }
}


var greetEnglish = makeGreetingFactory('en');// each function invoke creates its execution context
var greetSpanish = makeGreetingFactory('es');// each function invoke creates its execution context

greetEnglish('vittal','kamkar'); //this function will know,  which languahe variable to point due to closure concept and JS engine feature 
greetSpanish('vittal','kamkar');//this function will know,  which languahe variable to point due to closure concept and JS engine feature 