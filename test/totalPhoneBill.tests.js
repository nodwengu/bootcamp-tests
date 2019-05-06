describe('The totalPhoneBill Function', function() {
    it('Should calculate and display the total phone bill', function() {
        assert.equal(totalPhoneBill("call, sms, call, sms, sms"), 'R7.45');
    });

    it('Should accept string as input', function() {
        var input = 'call, sms'
        assert.isString(input);
    });

    it('Should return true if input is undefined', function() {
        var input;
        assert.isUndefined(input);
    });

    it('Should true if input is an empty', function() {
        var input = '';
        assert.equal(totalPhoneBill(input), 'R0.00');
    });

    it('Should true if output is a string', function() {
        var input = 'call, sms';
        assert.isString(totalPhoneBill(input), 'Expected output should be a string');
    });
});

