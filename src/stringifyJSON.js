// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
var stringifyJSON = function(obj) {

  var resultString = '';

  //Skip functions and 'undefined'
  if (Object.prototype.toString.call(obj) == "[object Function]" || obj === undefined){
  	return;
  }


  //Non-nested values
  //If not Object nor Array
  if (Object.prototype.toString.call(obj) !== "[object Object]" && !Array.isArray(obj)){
  	
  	if(obj === null) {return'null';}
  	if(typeof obj === 'string') {return'"' + obj.toString() + '"';}
  	else{return obj.toString();}
  	
  }


  //Nested values
  //If Array
  if(Array.isArray(obj)){
	resultString += '[';
	for (var i=0; i<obj.length; i++){
		resultString += stringifyJSON(obj[i]);
		if (i < obj.length-1){resultString += ',';}
	} 
    resultString +=']';
  }

  //If Object
  if (Object.prototype.toString.call(obj) == '[object Object]'){
	  resultString += '{';
	  //var keys = Object.keys(obj);

	  for (var prop in obj){
	  	console.log(prop);
	  }

	  return resultString + '}';
  }

  return resultString;
};

