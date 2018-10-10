function counterCalculator{
	var globalResult = 0;
	function calculator(val1, val2, operator){
		var result;
	
		var validOperators = ['+','-','*','/'];

		if(validOperators.includes(val2)){
			operator = val2;
			val2 = globalResult;
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
 	       result = val1/val2;
 	       break;
 		default:
 	   	return "Invalid operator";
		};
	
		this.globalResult = result;
		return this.globalResult;
	};
}