
describe('The isFromBellville function', function() {
    
   it('Should return TRUE if reg starts with CY', function() {
      var reg = 'CY 123';
      assert.equal(isFromBellville(reg), true);
   });

   it('Should return TRUE if Reg DOES NOT starts with CY', function() {
      var reg = 'CA 123';
      assert.equal(isFromBellville(reg), false);
   });

   // What happens when the registration starts with lowercase letters
   it('Should return TRUE if reg starts with "cy" as lowercase.', function() {
      var reg = 'cy 123';
      assert.equal(isFromBellville(reg), true);
   });

   // What happens when mixed cases
   it('Should return TRUE if reg starts with "cY" as mixed cases.', function() {
      var reg = 'cY 123';
      assert.equal(isFromBellville(reg), true);
   });
   
   it('Should return TRUE if reg starts with "Cy" as mixed cases.', function() {
      var reg = 'Cy 123';
      assert.equal(isFromBellville(reg), true);
   });

   //what if the input is empty
   it('Should return FALSE if reg is empty.', function() {
      var reg = 'fdfd ';
      assert.isNotEmpty(isFromBellville(reg), true);
   });


});