describe('The fromWhere Function', function() {
    it('Should return "Bellville" if input string is "CY"', function() {
        assert.equal(fromWhere('CY'), 'Bellville');
    });
    it('Should return "Paarl" if input string is "CJ"', function() {
        assert.equal(fromWhere('CJ'), 'Paarl');
    });
    it('Should return "Cape Town" if input string is "CA"', function() {
        assert.equal(fromWhere('CA'), 'Cape Town');
    });
    it('Should return "invalid input" if input string is invalid', function() {
        assert.equal(fromWhere('@35rrg'), 'invalid input');
    });
    it('Should return true if function returns a string', function() {
        assert.isString(fromWhere('CA'), 'The function should return a string');
    });

    
});