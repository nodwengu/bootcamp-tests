describe('The regCheck check function', () => {
    
    it('Should return TRUE if first letters of regNumber is the same as location', function(){
        let regNum = 'CA 123';
        let location = 'CA';
        assert.deepEqual(regCheck(regNum, location), true);
    });

    it('Should return false when an invalid data is provided as input', function(){
        let regNum = '@#$$%%';
        let location = '565656';
        assert.deepEqual(regCheck(regNum, location), false);
    });

    it('Indicates failure when regNumber is passed as an empty string', function() {
        let regNum = '';
        let location = 'EC';
        assert.deepEqual(regCheck(regNum, location), false);
    });

    it('Indicates failure when regNumber is invalid input', function() {
        let regNum = '@34ggfcgfg';
        let location = 'EC';
        assert.equal(regCheck(regNum, location), false);
    });

    it('Indicates failure when location is invalid input', function() {
        let regNum = 'CA 123';
        let location = '@34ggfcgfg';
        assert.equal(regCheck(regNum, location), false);
    });
});