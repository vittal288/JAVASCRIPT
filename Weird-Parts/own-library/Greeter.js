(function (global, $) {
    var init;
    var Greetr = function (firstname, lastname, language) {
        // below statement will return an empty object 
        return new Greetr.init(firstname, lastname, language);
    };

    Greetr.prototype ={};

    Greetr.init = function (firstname, lastname, language) {
        var self = this;
        self.firstname = firstname || '';
        self.lastname = lastname || '';
        self.language = language || 'en';
    }

    Greetr.init.prototype = Greetr.prototype;

   // pointing same memory location of Greetr to global.Greetr and global.G$;
   global.Greetr = global.G$ = Greetr;

}(window, $));