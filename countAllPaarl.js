function countAllPaarl(regNumbers) {
	//console.log(regNumbers);
  	var paarlCounter = 0;
  	var regNumbersArr = regNumbers.split(", ");
  	
  	for(var i = 0; i < regNumbersArr.length; i++) {
    	if(regNumbersArr[i].startsWith("CJ")) {
        	paarlCounter++;
        }
    }
  
  	return paarlCounter;
} 

// console.log( countAllPaarl("CJ 345 123, CJ 2345, CL 123-546, CK 345, CJ 123") );