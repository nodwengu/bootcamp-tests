
describe('The countAllPaarl() function', function() {
    var reg = 'CJ 345 123, CJ 2345, CL 123-546, CK 345, CJ 123';
    
    it('Should return 3 when the string "CJ 345 123, CJ 2345, CL 123-546, CK 345, CJ 123" is passed as input', function() {
        assert.equal(3, countAllPaarl(reg) );
    });
    it('Should return 0 when the string "CA 345 123, CL 123-546, CK 345, CL 123" contains no reg number from Paarl', function() {
        var reg = 'CA 345 123, CL 123-546, CK 345, CL 123'
        assert.deepEqual(0, countAllPaarl(reg) );
    });

    it('Should return true if registration number is passed as a string', function() {
        assert.isString(reg, 'Reg number must be a string');
    });

    it('Should return false if registration number is undefined', function() {
        var reg;
        assert.isUndefined(reg);
    });

    it('Should return false if invalid value is passed as input', function() {
        var reg = '@#$%^666';
        assert.equal(countAllPaarl(reg), false);
    });
});