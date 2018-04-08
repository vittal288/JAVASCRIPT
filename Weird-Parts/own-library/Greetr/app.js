// gets a new object fo G$, (this architectire allows us to not to use 'new' keyword to create a instance of Greetr lib)
var g = G$('Vittal','Kamkar');
// use our chaingable method 
g.greet().setLang('es').greet(true).log();


// $('#lang').change(function(event){
//     var selectedLang = event.target.value;       
//     g.setLang(selectedLang).HTMLGreet('#greeting',true);
// });


$('#login').click(function(){  
    // create a new 'Greetr' object (let's pretend we know the name post login)
    $('#logindiv').hide()

    // fire off an HTML greeting, passing #greeting as the selector and the choosed language and 
    // --> log the welcome message as well
    g.setLang($('#lang').val()).HTMLGreet('#greeting',true);
});