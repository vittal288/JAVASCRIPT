// module desgin pattern with closure

var budgetController = (function(){
    var x =10;

    var add = function(a){
        return a+x;
    }

    return {
        publicTest: function(b){
            //console.log(x+b)
            return x+b;
        }
    }
})();


// this controller is responsible for to take care of user interface 
var UIController = (function(){

    // 
})();


//app controller to communicate between other controller or shared controller

var controller = (function(budgetCtrl,UICtrl){
//
    var z = budgetCtrl.publicTest(5);

    return{
        anotherPublicTest: function(){
            console.log(z);
        }
    }


})(budgetController,UIController);
