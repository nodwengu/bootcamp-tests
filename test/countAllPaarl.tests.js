
describe('The countAllPaarl() function', function() {
    it('Returns the number of registration numbers in the string for Paarl', function() {
        assert.equal(3, countAllPaarl('CJ 345 123, CJ 2345, CL 123-546, CK 345, CJ 123') );
    });

    it('Returns true if there is no registration for Paarl', function() {
        assert.equal(countAllPaarl('CL 123-546, CK 345'), false);
    });

    it('Returns true if registration number is not a string', function() {
        var reg = 256544
        assert.typeOf(reg, 'number');
    });

    it('Returns true if registration number is undefined', function() {
        var reg;
        assert.isUndefined(reg);
    });
});