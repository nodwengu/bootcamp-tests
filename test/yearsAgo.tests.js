// Testing current year (2019) expecting 0
// Teting the previous year expecting 1
// Testing year in the future expecting -ve output
// Teting the negative input (-2020) result (4039)
// Testing for the string input expecting strange results

describe('The yearsAgo Function', function() {
    it('Should return true if current year is input.', function() {
        assert.equal(yearsAgo(2019), 0);
    });

    it('Should return true if previous year is input.', function() {
        assert.equal(yearsAgo(2018), 1);
    });

    it('Should return true if year in the future is input.', function() {
        assert.equal(yearsAgo(2025), -6);
    });

    it('Should return true if year is negative input.', function() {
        assert.equal(yearsAgo(-2020), 4039);
    });

    it('Should return true if year is not a number', function() {
        assert.equal(yearsAgo('asasas'), 'Number required');
    });

});