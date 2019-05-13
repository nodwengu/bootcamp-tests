describe('The transportFee Function', function() {
    it('Should return true if the input string for shift is "morning"', function() {
        assert.equal(transportFee('morning'), "R20");
    });

    it('Should return true if the input string for shift is "afternoon"', function() {
        assert.equal(transportFee('afternoon'), "R10");
    });

    it('Should return true if the input string for shift is "nightshift"', function() {
        assert.equal(transportFee('nightshift'), "free");
    });

    it('Should return false if the input string for shift is not "morning" or "afternoon" or "nightshift"', function() {
        var shift = '@33fdfdfxf'
        assert.equal(transportFee(shift), undefined);
    });

    it('Should return false if the input string for shift is an empty string', function() {
        var shift = ''
        assert.equal(transportFee(shift), undefined);
    });
});