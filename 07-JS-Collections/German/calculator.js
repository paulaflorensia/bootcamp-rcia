window.onload = function() {
  var input = document.getElementById("result").focus();
  document.getElementById('result').addEventListener("keydown",keypress_focus);
}

document.addEventListener("keydown",keypress);
//document.getElementById('result').addEventListener("keydown",alert('ok'));

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

	var selection = splitSelection();

	document.getElementById('result').value = selection[0]+key+selection[2];
	document.getElementById('result').selectionStart = selection[0].length+1;
	document.getElementById('result').selectionEnd = selection[0].length+1;
};

function erase(){
	document.getElementById('result').value = "";
}


/*
function eraseOne(){
	if(document.activeElement === document.getElementById("result")){
		var selection = splitSelection();
		document.getElementById('result').value = selection[0]+selection[2];
		console.log(selection[0]);
		console.log(selection[1]);
		console.log(selection[2]);
		console.log(document.getElementById('result').value);
		document.getElementById('result').selectionStart = selection[0].length+1;
		document.getElementById('result').selectionEnd = selection[0].length+1;
	}
	else{
		document.getElementById('result').value = document.getElementById('result').value.slice(0, -1);
	}
	
}


function validateInput(e){
	if(e.keyCode == '65'){
		alert('a');
		return false;
	}
}
*/

function keypress(e){

	if(!(document.activeElement === document.getElementById("result"))){
		
		keypress_focus(e);
		
	};

	switch(e.keyCode) {
        case 13:
            calc();
            break;
        case 27:
            erase();
            break;
    } 
    
}

function keypress_focus(e){
	switch(e.keyCode){
		case 48:
		case 96:
            keystroke('0');
            break;  
        case 49:
        case 97:
            keystroke('1');
            break;
        case 50:
        case 98:
            keystroke('2');
            break;
        case 51:
        case 99:
            keystroke('3');
            break;
        case 52:
        case 100:
            keystroke('4');
            break;  
        case 53:
        case 101:
            keystroke('5');
            break;  
        case 54:
        case 102:
            keystroke('6');
            break;
        case 55:
        case 103:
            keystroke('7');
            break;
        case 56:
        case 104:
            keystroke('8');
            break;
        case 57:
        case 105:
            keystroke('9');
            break;
        case 187:
        case 107:
        	keystroke('+');
        	break;
        case 189:
        case 109:
        	keystroke('-');
        	break;
        //case 8:
            //eraseOne();
          //  break;
		};
		document.getElementById('result').focus();
}

function calc(){

	r = 0;

	string = document.getElementById('result').value;

	string = string.replace("-","+-");
	terms = string.split('+');

	for(let t of terms){
		r = r + parseInt(t);
	};

	document.getElementById('result').value = r;	
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