describe('The totalPhoneBill Function', function() {
    it('totalPhoneBill should calculate the total phone bill', function() {
        assert.equal(totalPhoneBill("call, sms, call, sms, sms"), 'R7.45');
    });

    it('Should accept string as input', function() {
        var input = 'call, sms'
        assert.isString(input);
    });

    it('Should true if input is undefined', function() {
        var input;
        assert.isUndefined(input);
    });

    it('Should true if input is an empty string', function() {
        var input = '';
        assert.equal(totalPhoneBill(input), '');
    });
});

