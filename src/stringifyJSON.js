// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
var stringifyJSON = function(obj) {

  var resultString = '';

  //Skip functions and 'undefined' properties
  if (Object.prototype.toString.call(obj) == "[object Function]" || obj === undefined){
  	return;
  }

  //******If Non-nested value
  //If not Object nor Array
  if (Object.prototype.toString.call(obj) !== "[object Object]" && !Array.isArray(obj)){
  	
  	if(obj === null) {return'null';}
  	if(typeof obj === 'string') {return'"' + obj.toString() + '"';}
  	else{return obj.toString();}
  	
  }


  //*****If Nested values ie: obj is collection*****
  
  //***If Array
  if(Array.isArray(obj)){
	resultString += '[';
	for (var i=0; i<obj.length; i++){
		resultString += stringifyJSON(obj[i]);
		if (i < obj.length-1){resultString += ',';}
	} 
    resultString +=']';
  }

  //***If Object
  if (Object.prototype.toString.call(obj) == '[object Object]'){

	resultString += '{';

    //if object not empty:
    if (Object.keys(obj).length > 0){
	  for (var prop in obj){
	  	
	  	//Skip functions and 'undefined'
        if (Object.prototype.toString.call(obj[prop]) === "[object Function]" || obj[prop] === undefined){
  	      continue;
        }
	    resultString +=  '"' + prop + '"' +':'+ stringifyJSON(obj[prop]) + ',';
	  }

	  //remove last ',' if present
	  if (resultString.charAt(resultString.length-1) === ','){
	   resultString = resultString.slice(0, -1); 
	  }
	}

	resultString += '}';
  }

  return resultString;
};

