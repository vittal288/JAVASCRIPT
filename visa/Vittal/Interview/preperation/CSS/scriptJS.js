for(var i=0;i<=9000000;i++){
	
	if(i % 100000 ===0){
		
		console.log('FORM IS LOADING...',document.forms.length);
		console.log(document.readyState);
	}
}

