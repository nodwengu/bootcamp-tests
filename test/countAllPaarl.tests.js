
describe('The countAllPaarl() function', function() {
    var reg = 'CJ 345 123, CJ 2345, CL 123-546, CK 345, CJ 123';
    
    it('Should return the number of registration numbers in the string for Paarl', function() {
        assert.equal(3, countAllPaarl(reg) );
    });

    it('Should return true if there is no registration for Paarl', function() {
        assert.equal(countAllPaarl('CL 123-546, CK 345'), false);
    });

    it('Should return true if registration number is not a string', function() {
        assert.isString(reg, 'Reg number must be a string');
    });

    it('Returns true if registration number is undefined', function() {
        var reg;
        assert.isUndefined(reg);
    });
});