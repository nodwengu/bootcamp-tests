describe('The regCheck check function', () => {
    // Function takes 2 args regNumber & Location (EC or GP for axample)
   
    // First test for regNumber then Location
    // check for the expected input for reg number
    // check for an empty input
    // check for non-text input
    // check for lower-case input
    // check for mixed-case input 
    
    it('Should return TRUE if regNumber or location starts with letters', function(){
        let regNum = 'ERT 123 EC';
        let location = 'EC';
        assert.equal(regCheck(regNum, location), true, 'message');
    });

    it('Indicates failure when regNumber is empty', function() {
        let regNum = '';
        let location = 'EC';
        assert.equal(regCheck(regNum, location), false, 'message');
    });

    it('Should return TRUE if location is empty', function() {
        let regNum = 'ERT 123 EC';
        let location = '';
        assert.equal(regCheck(regNum, location), true, 'message');
    });

    // it('indicates failure when numbers is used instead of strings', function() {
    //     let regNum = 121212;
    //     let location = 222;
    //     assert.equal(regCheck(regNum, location), true, 'message');
    // });

   
});