// put semicolon, because webpage imports other libraries before Greetr.js  and to seperate it 
;(function (global, $) {
    //  'new' an object
    var Greetr = function (firstname, lastname, language) {
        // below statement will return an empty object 
        return new Greetr.init(firstname, lastname, language);
    };

    // hidden within the scope of IIFE and never directly accessable to 
    // these are(supportedLangugues,greetings,formalGreetings and logMessages)
    // --> private array and it will not exposed to public but still we have acess in Greetr.init method due to CLOSURE
    var supportedLangugues =['en','es'];

    // informal greetings
    var greetings={
        en:'Hello !',
        es:'Hola !'
    };

    // formal greetings 
    var formalGreetings ={
        en:'Greetings',
        es:'Saludos'
    }

    // logger messages 
    var logMessages={
        en:'Logged in',
        es:'Indicio Sesion'
    }
    
    // prototype holds the method(to save the memory)
    // publically exposed methods can be write here, becauses all wrapped inside prototype object and saves the memory
    // if consumer creates every instance of Greetr Class
    Greetr.prototype ={
        // this refers to calling object at execution time 
        fullname:function(){
            return this.firstname+' '+ this.lastname;
        },

        // to check that is valid language 
        // references the externally inaccessible 'supportedLangugues' withing the closure
        valdate:function(){
            // if we could not get the match then indexOf returns an -1 
            if(supportedLangugues.indexOf(this.language) === -1){
                throw "Invalid Language !"
            }
        },

        // retrieves messages from an object by reffering proprites using [] syntax
        greeting: function(){              
            return greetings[this.language]+ ' '+ this.firstname;
        },

        formalGreeting:function(){
            return formalGreetings[this.language]+' , '+ this.fullname();
        },

        // chaingable methods returns their own containing object 
        greet:function(formal){
            var msg;
            // if undefined or null,  it will be coerced to 'false' 
            if(formal){
                msg = this.formalGreeting();
            }else{
                msg = this.greeting();
            }

            if(console){
                console.log(msg);
            }

            // 'this' refers to calling object to execution time 
            // and makes the method chainable
            return this;
        },

        log:function(){
            // if console is opened then it is available
            if(console){
                console.log(logMessages[this.language]+': ', this.fullname());
            }
            // log is also chainable method 
            return this;
        },

        setLang:function(lang){
            this.language = lang;
            
            this.valdate();

            // make chainable method 
            return this;
        },

        HTMLGreet:function(selector,formal){
            if(!$){
                throw 'JQuery is not imported !'
            }            
            if(!selector){
                throw 'Missing selector'
            }
            if(formal){
                msg = this.formalGreeting();
            }else{
                msg = this.greeting();
            } 
            
            // inject the message in the choosed place of DOM
            $(selector).html(msg);

            // make chainable 
            return this;
        }
    };

    Greetr.init = function (firstname, lastname, language) {
        var self = this;
        self.firstname = firstname || '';
        self.lastname = lastname || '';
        self.language = language || 'en';

        self.valdate();
    }

    // trick borrowed from JQ lib, so we did not have to use the 'new' keyword 
    Greetr.init.prototype = Greetr.prototype;

   // attach our Greetr to the global object, and provide a shorthand '$G' for ease our poor pingers 
   // pointing same memory location of Greetr to global.Greetr and global.G$;
   global.Greetr = global.G$ = Greetr;

}(window, $));