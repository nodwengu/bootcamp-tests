describe('The regCheck check function', () => {
    
    it('Should return TRUE if first letters of regNumber is the same as location', function(){
        let regNum = 'CA 123';
        let location = 'CB';
        assert.deepEqual(regCheck(regNum, location), true);
    });

    // it('Indicates failure when regNumber is passed as an empty string', function() {
    //     let regNum = '';
    //     let location = 'EC';
    //     assert.deepEqual(regCheck(regNum, location), false);
    // });

    // it('Indicates failure when location is passed as an empty string', function() {
    //     let regNum = 'ERT 123';
    //     let location = '';
    //     assert.equal(regCheck(regNum, location), false);
    // });

    // it('Should return TRUE if regNumber and location are passed as empty strings', function(){
    //     let regNum = '';
    //     let location = '';
    //     assert.equal(regCheck(regNum, location), true);
    // });

    // it('Indicates failure when regNumber is invalid input', function() {
    //     let regNum = '@34ggfcgfg';
    //     let location = 'EC';
    //     assert.equal(regCheck(regNum, location), false);
    // });

    // it('Indicates failure when location is invalid input', function() {
    //     let regNum = 'CA 123';
    //     let location = '@34ggfcgfg';
    //     assert.equal(regCheck(regNum, location), false);
    // });
});