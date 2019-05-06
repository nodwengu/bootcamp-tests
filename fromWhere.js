function fromWhere(regNumber) {
	if(regNumber.startsWith('CY')) {
    	return "Bellville";
    } else if(regNumber.startsWith('CJ')) {
    	return "Paarl";
    } else if(regNumber.startsWith('CA')) {
    	return "Cape Town";
    } else {
    	return "invalid input";
    }
}

// console.log(fromWhere("V12211"));