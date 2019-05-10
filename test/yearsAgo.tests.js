
describe('The yearsAgo Function', function() {
    it('Should return zero "0" if current year (2019) is passed as input.', function() {
        assert.deepEqual(yearsAgo(2019), 0);
    });

    it('Should return 1 if previous year (2018) is passed as input.', function() {
        assert.equal(yearsAgo(2018), 1);
    });

    it('Should return -6 if year (2025) passed as input is in the future.', function() {
        assert.equal(yearsAgo(2025), -6);
    });

    it('Should return 4039 if year (-2020) passed as input is a negative number.', function() {
        assert.equal(yearsAgo(-2020), 4039);
    });

    it('Should return "Number required" error message if input is not a number', function() {
        assert.equal(yearsAgo('test'), 'Number required');
    });

});