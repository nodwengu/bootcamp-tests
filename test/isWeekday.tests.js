
describe('isWeekday function', function() {
    // Expected
    it('Should return True if valid day of the week is passed as input', function() {
        var day = 'Friday';
        assert.equal(isWeekday(day), true);
    });
    
    it('Should return true if entered day is all lower case letters', function() {
        var day = 'friday';
        assert.equal(isWeekday(day), false);
    });
    
    it('Should return true if the function returns a boolean value', function() {
        var day = 'Friday';
        assert.isBoolean(isWeekday(day), 'Expeted to return true or false');
    });
  
})