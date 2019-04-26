
var isFromBellville = function(regNumber) {
   
   return ( regNumber.startsWith('CY') || 
         regNumber.startsWith('cy') || 
         regNumber.startsWith('cY') || 
         regNumber.startsWith('Cy') );
	
}