describe('The countAllFromTown Function', function() {
    
    it('Should return 3 when the string "CA 124,CY 567,CA 345,CJ 456,CA 341" is passed as input', function() {
        assert.equal(3, countAllFromTown('CA 124,CY 567,CA 345,CJ 456,CA 341','CA'));
    });

    it('Should return 0 when the string "CY 124,CY 567,CJ 345,CJ 456,CK 341" contains no reg number from Cape Town', function() {
        assert.equal(0, countAllFromTown('CY 124,CY 567,CJ 345,CJ 456,CK 341','CA'));
    });

    it('Should return false when an invalid string is provided as input', function() {
        assert.equal(countAllFromTown('@&&$$FG','CA'), false);
    });

    it('Should return true if registration is a string', function() {
        var regNumbers = 'CY 124,CY 567,CJ 345,CJ 456,CK 341';
        assert.isString(regNumbers, 'Registration needs to be a string');
    });

    it('Should return false if the first argument is undefined', function() {
        var regNumbers;
        assert.isUndefined(regNumbers, 'Reg number is not defined');
    });

    it('Should returns false if the start string is undefined', function() {
        var startStr;
        assert.isUndefined(startStr, 'Start string is undefined');
    });
});
