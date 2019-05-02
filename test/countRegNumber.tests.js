describe('The countRegNumber function', function() {
    // Test for correct input
    // Test for input without commas
    // Test for number as input
    // Test for an empty input
  
    // Expected
    it('Should return true if entered the expected input', function() {
        var regNumbers = 'CA 182736,CY 523519,CJ 812328';
        assert.equal('3', countRegNumber(regNumbers));
    });

    // Empty input
    it('Should return true if entered an empty input', function() {
        var regNumbers = "";
        assert.equal('0', countRegNumber(regNumbers));
    });


    it('Should return true if returned value is a number', function() {
        var regNumbers = 'CA 182736,CY 523519,CJ 812328';
        assert.isNumber(countRegNumber(regNumbers));
    });
});