// Check for the expected input
// Check for the expeted output
// Check for an empty input
// check if input is number
// Check for lower case input
// Check for uppercase input
// Check for input that is not valid day of the week (for example thando as input)

 

describe('isWeekday function', function() {
    // Expected
    it('Should return True is valid day of the week is input', function() {
        var day = 'Friday';
        assert.equal(isWeekday(day), true);
    });
    
    it('Should return true if day is all lower case letters', function() {
        var day = 'friday';
        assert.equal(isWeekday(day), false);
    });
    
    it('Should return a boolean value', function() {
        var day = 'Friday';
        assert.isBoolean(isWeekday(day), 'Expeted to return true or false');
    });
  
})