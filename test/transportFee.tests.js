describe('The transportFee Function', function() {
    it('Returns true if shift is "morning"', function() {
        assert.equal(transportFee('morning'), "R20");
    });

    it('Returns true if shift is "afternoon"', function() {
        assert.equal(transportFee('afternoon'), "R10");
    });

    it('Returns true if shift is "nightshift"', function() {
        assert.equal(transportFee('nightshift'), "free");
    });

    it('Returns true if shift is not "morning" or "afternoon" or "nightshift"', function() {
        var shift = '@33fdfdfxf'
        assert.equal(transportFee(shift), undefined);
    });

    it('Returns true if shift is an empty string', function() {
        var shift = ''
        assert.equal(transportFee(shift), undefined);
    });
});