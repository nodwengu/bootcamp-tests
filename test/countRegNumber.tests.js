describe('The countRegNumber function', function() {
    
    var regNumbers = 'CA 182736,CY 523519,CJ 812328';

    // Expected
    it('Should return the number of registration numbers', function() {
        assert.equal('3', countRegNumber(regNumbers));
    });
    // Empty input
    it('Should return true if input is empty', function() {
        var regNumbers = "";
        assert.equal('0', countRegNumber(regNumbers));
    });
    //Checking type of input
    it('Should return true if input value is a string', function() {
        assert.typeOf(regNumbers, 'string');
    });
     
});