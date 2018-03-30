var sampleCls = function(){
	
	//public memmbers
	this.add= function(a,b){
	   return a+b;
	},
	
	this.subs = function(a,b){
	  return a-b;
	}
	
	//private members
	var mul = function(a,b){
		return a*b;
	}
}

sampleCls.prototype.div = function(a,b){
   return a/b
}


/*
	var obj = new sampleCls();
	obj.add(2,3)
*/



