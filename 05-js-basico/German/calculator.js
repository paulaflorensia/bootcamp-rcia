/*-----Function for two values-----*/
var globalResult;
function calculator(val1, val2, operator){
	var result;
	var wrongOpTypes = ['number','boolean','undefined'];
	var wrongValTypes = ['boolean','undefined'];

	if((typeof val1 == 'string' || typeof val2 == 'string') && operator == '+'){
		val1 = parseInt(val1);
		val2 = parseInt(val2);
	}

	if(wrongOpTypes.includes(typeof operator)){
		return "Wrong operator type";
	}

	if(wrongValTypes.includes(typeof val1) || wrongValTypes.includes(typeof val2)){
		return "Wrong value type";
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
        result = val1/val2;
        break;
    default:
    	return "Invalid operator";
	};

	this.globalResult = result;
	return this.globalResult;
};
/*calculator(6,5,'*');*/

function calculator(val1, operator){
	var result;
	switch(operator) {
    case '+':
        result = val1+this.globalResult;
        break;
    case '-':
        result = this.globalResult-val1;
        break;
    case '*':
        result = val1*this.globalResult;
        break;
    case '/':
        result = (this.globalResult) / val1;
        break;
    default:
    	return "Invalid operator";
	};
	return result;
};
/*calculator(3,'/');*/

