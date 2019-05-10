
describe('The isFromBellville function', function() {
   
   //Expected paths
   it('Should return TRUE if reg starts with CY', function() {
      var reg = 'CY 123';
      assert.equal(isFromBellville(reg), true);
   });

   //Error path
   it('Should return false if Reg does not start with CY', function() {
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
   it('Should return false if reg is an empty string.', function() {
      var reg = '';
      assert.equal(isFromBellville(reg), false);
   });

   //what if wrong string is passed
   it('Should return false if invalid string is passed as input', function() {
      var reg = '@$rtrtrs';
      assert.equal(isFromBellville(reg), false);
   });

});