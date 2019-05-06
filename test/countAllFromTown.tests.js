describe('The countAllFromTown Function', function() {
    it('Returns the number of registration numbers from town', function() {
        assert.equal(3, countAllFromTown('CL 124,CY 567,CL 345,CJ 456,CL 341','CL'));
    });

    it('Returns true if there is no reg number from town', function() {
        assert.equal(countAllFromTown('CY 124,CY 567,CJ 345,CJ 456,CK 341','CL'), false);
    });

    it('Returns true if the start string is not a string', function() {
        var regNumbers = 'CY 124,CY 567,CJ 345,CJ 456,CK 341';
        var startStr = 123;
        assert.typeOf(startStr, 'number');
    });

    it('Returns true if the first argument is not a string', function() {
        var regNumbers = 1230;
        var startStr = 'CL';
        assert.typeOf(regNumbers, 'number');
    });

    it('Returns true if the first argument is undefined', function() {
        var regNumbers;
        assert.isUndefined(regNumbers);
    });

    it('Returns true if the start string is undefined', function() {
        var startStr;
        assert.isUndefined(startStr);
    });
});
