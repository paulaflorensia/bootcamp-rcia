var calculator = function(val1, val2, operator){

	if(typeof globalResult == 'undefined'){
		globalResult = 0;
	};
	
	return function(){
		var result;
	
		var validOperators = ['+','-','*','/'];

		if(validOperators.includes(val2)){
			operator = val2;
			val2 = globalResult;
			if(operator == '/'){
				[val1, val2] = [val2, val1];
			}
		}

		if(operator == '+' && (typeof val1 == 'string' || typeof val2 == 'string')){
			val1 = parseInt(val1);
			val2 = parseInt(val2);
		}
	
		switch(operator) {
 		case '+':
 	       result = val1+val2;
 	       break;
  		case '-':
 	       result = val1-val2;
        break;
 		case '*':
        	result = val1*val2;
   	    	break;
 		case '/':
 	   		if(val2 == 0){
 	   			return "Can't divide by zero";
 	   			break;
 	   		}
 	   		/*If we get only one argument it acts as divisor*/
 	       result = val1/val2;
 	       break;
 		default:
 	   		return "Invalid operator";
		};
	
		this.globalResult = result;
		return this.globalResult;
	}();
};