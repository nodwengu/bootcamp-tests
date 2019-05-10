function regCheck(regNumber, location) {
   //console.log(regNumber);
  //console.log(location);
   return regNumber.endsWith(location) || regNumber.startsWith(location); 
} 

// alert(regCheck('CA 123', ''));