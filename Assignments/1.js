// 1. Write a constructor function to represent a Rectangle, which can calculate its area and perimeter.
// 2. Write a Point function which takes x and y coordinates as arguments to define it. 
// --> It should also be able to evaluate the distance from another point. We may make use of this exercise in a later assignment problem when dealing with the Document Object Model.
// 3. Write javascript code so that we can check if a string object is a palindrome. E.g. "xyx".isPalindrome() should return true.


// 1
function Rectangle(w,l){
    this.area = function(){
        return w*l;
    }
    this.permeter = function(){
        return 2(w*l);
    }
}

// 2
function Point(x,y){

}

// 3
String.prototype.isPalindrome = function(str){    
    if(str === reverse(str)){
        return true;
    }else{
        return false;
    }
}

function reverse(str){   
    return str.split("").reverse().join("");
}


module.exports = String.prototype.isPalindrome;