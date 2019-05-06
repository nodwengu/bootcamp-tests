describe('The fromWhere Function', function() {
    it('Should return true if reg number is for Bellville', function() {
        assert.equal(fromWhere('CY'), 'Bellville');
    });
    it('Should return true if reg number is for Paarl', function() {
        assert.equal(fromWhere('CJ'), 'Paarl');
    });
    it('Should return true if reg number is for Cape Town', function() {
        assert.equal(fromWhere('CA'), 'Cape Town');
    });
    it('Should return true if reg number is invalid', function() {
        assert.equal(fromWhere('@35rrg'), 'invalid input');
    });
    it('Should return true if function returns a string', function() {
        assert.isString(fromWhere('CA'), 'The function should return a string');
    });

    
});