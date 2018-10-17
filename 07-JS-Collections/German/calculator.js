window.onload = function() {
  var input = document.getElementById("result").focus();
  document.getElementById('result').addEventListener("keydown",keypress_focus);
}

document.addEventListener("keydown",keypress);

function splitSelection(){
	var myElement = document.getElementById('result');
    var startPosition = myElement.selectionStart;
    var endPosition = myElement.selectionEnd;

    value = document.getElementById('result').value;

    before = value.substring(0,startPosition);
    medium = value.substring(startPosition,endPosition);
    end = value.substring(endPosition,value.length);

    return [before,medium,end];
}

function keystroke(key){

	if(document.getElementById("result").value == "Invalid Syntax"){
		document.getElementById("result").value = "";
	}

	var selection = splitSelection();

	document.getElementById('result').value = selection[0]+key+selection[2];
	document.getElementById('result').selectionStart = selection[0].length+1;
	document.getElementById('result').selectionEnd = selection[0].length+1;

	document.getElementById('result').focus();
};

function erase(){
	document.getElementById('result').value = "";
	document.getElementById('result').focus();
}

function eraseOne(){

		var selection = splitSelection();

		if(selection[1].length == 0){
			selection[0] = selection[0].slice(0, -1);
		};

		document.getElementById('result').value = selection[0]+selection[2];

		document.getElementById('result').selectionStart = selection[0].length+1;
		document.getElementById('result').selectionEnd = selection[0].length+1;
	
}

function keypress(e){

	if(!(document.activeElement === document.getElementById("result"))){
		
		keypress_focus(e);
		
	};

	switch(e.keyCode) {
        case 13: //enter
            calc();
            break;
        case 27: //scape
            erase();
            break;
    } 
    
}

function keypress_focus(e){
	switch(e.keyCode){
		case 48:
		case 96://numpad
            keystroke('0');
            break;  
        case 49:
        case 97://numpad
            keystroke('1');
            break;
        case 50:
        case 98://numpad
            keystroke('2');
            break;
        case 51:
        case 99://numpad
            keystroke('3');
            break;
        case 52:
        case 100://numpad
            keystroke('4');
            break;  
        case 53:
        case 101://numpad
            keystroke('5');
            break;  
        case 54:
        case 102://numpad
            keystroke('6');
            break;
        case 55:
        case 103://numpad
            keystroke('7');
            break;
        case 56:
        case 104://numpad
            keystroke('8');
            break;
        case 57:
        case 105://numpad
            keystroke('9');
            break;
        case 187:
        case 107://numpad
        	keystroke('+');
        	break;
        case 189:
        case 109://numpad
        	keystroke('-');
        	break;
        case 106://numpad
        	keystroke('*');
        	break;
        case 111://numpad
        	keystroke('/');
        	break;
		};
		
}

function calc(){

	r = 0;

	string = document.getElementById('result').value;

	string = string.replace(/[-]/g,"+-");
	terms = string.split('+');

	for(let t of terms){

		p = products(t);

		r = r + Number(p);
	};

	if(isNaN(r)){
		r = "Invalid Syntax";
	};

	document.getElementById('result').value = r;	
};

function products(term){
	y = 1;

	term = term.replace(/[\/]/g,"*/");
	prods = term.split('*');

	for(let pr of prods){
		if(pr.charAt(0)=='/'){//la primera es dividido
			pr = pr.substring(1);
			pr = 1/parseFloat(pr);//es el inverso
		};
		y = y * parseFloat(pr);
	};

	return y;

};

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