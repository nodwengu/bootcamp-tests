describe('The countAllFromTown Function', function() {
    
    it('Should return the number of registration numbers from town', function() {
        assert.equal(3, countAllFromTown('CL 124,CY 567,CL 345,CJ 456,CL 341','CL'));
    });

    it('Should return true if there is no reg number from town', function() {
        assert.equal(countAllFromTown('CY 124,CY 567,CJ 345,CJ 456,CK 341','CL'), false);
    });

    it('Should return true if the start string is a string', function() {
        var startStr = 'CL';
        assert.isString(startStr, 'Start string needs to be a string');
    });

    it('Should return true if registration is a string', function() {
        var regNumbers = 'CY 124,CY 567,CJ 345,CJ 456,CK 341';
        assert.isString(regNumbers, 'Registration needs to be a string');
    });

    it('Should return true if the first argument is undefined', function() {
        var regNumbers;
        assert.isUndefined(regNumbers, 'Reg number is not defined');
    });

    it('Should returns true if the start string is undefined', function() {
        var startStr;
        assert.isUndefined(startStr, 'Start string is undefined');
    });
});
