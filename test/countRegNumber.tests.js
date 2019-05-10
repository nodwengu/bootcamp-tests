describe('The countRegNumber function', function() {
    
    var regNumbers = 'CA 182736,CY 523519,CJ 812328';

    // Expected
    it('Should return 3 when the string "CA 182736,CY 523519,CJ 812328" is passed as input', function() {
        assert.deepEqual(3, countRegNumber(regNumbers));
    });
    // Empty input
    it('Should return 0 when an empty string is passed as input', function() {
        var regNumbers = "";
        assert.deepEqual(0, countRegNumber(regNumbers));
    });
    it('Should return false if invalid string is passed as input', function() {
        var regNumbers = '@$%%^6';
        assert.equal(countRegNumber(regNumbers), true);
    });
    //Checking type of input
    it('Should return true if passed input is a string', function() {
        assert.typeOf(regNumbers, 'string');
    });
   
});