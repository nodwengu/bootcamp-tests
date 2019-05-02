function countRegNumber(theString) {
	if(theString === "") {
		return 0;
	}
	return theString.split(",").length;
}

var regCount = countRegNumber('CA 182736,CY 523519,CJ 812328');
console.log(regCount);

// alert(regCount);