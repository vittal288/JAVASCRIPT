// module desgin pattern with closure

// BUDGET CONTROLLER
var budgetController = (function(){
   
})();





// this controller is responsible for to take care of user interface 
// UI CONTROLLER
var UIController = (function(){

    // 
})();


//app controller to communicate between other controller or shared controller
// GLOBAL APP CONTROLLER 
var controller = (function(budgetCtrl,UICtrl){
   
    // attach an event to add button 
    document.querySelector('.add__btn').addEventListener('click',function(){
        console.log('CLICK');
        // 1. get the field input data 
        // 2. add the item to budget controller 
        // 3. add the item to UI 
        // 4. calculate the budget 
        // 5. display the budget on the UI
    });


    // on ENTER KEY 
    document.addEventListener("keypress",(event)=>{
       
        if(event.keyCode === 13){
            console.log('ENTER');
        }
    })

})(budgetController,UIController);
