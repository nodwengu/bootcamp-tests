describe('The totalPhoneBill Function', function() {
    it('Should calculate and display "R7.45" if the input is "call, sms, call, sms, sms"', function() {
        assert.equal(totalPhoneBill("call, sms, call, sms, sms"), 'R7.45');
    });

    it('Should true if input string is passed as input', function() {
        var input = 'call, sms'
        assert.isString(input);
    });

    it('Should return false when input string is undefined', function() {
        var input;
        assert.isUndefined(input);
    });

    it('Should return "R0.00" if input string is an empty string', function() {
        var input = '';
        assert.equal(totalPhoneBill(input), 'R0.00');
    });
});

