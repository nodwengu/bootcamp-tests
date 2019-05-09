describe('The regCheck check function', () => {
    
    it('Should return TRUE if regNumber or location starts with letters', function(){
        let regNum = 'CA 123 EC';
        let location = 'EC';
        assert.equal(regCheck(regNum, location), true);
    });

    it('Indicates failure when regNumber is empty', function() {
        let regNum = '';
        let location = 'EC';
        assert.equal(regCheck(regNum, location), false);
    });

    it('Should return TRUE if location is empty', function() {
        let regNum = 'ERT 123 EC';
        let location = '';
        assert.equal(regCheck(regNum, location), true);
    });

    it('Should return TRUE if regNumber and location are empty strings', function(){
        let regNum = '';
        let location = '';
        assert.equal(regCheck(regNum, location), true);
    });

    it('Indicates failure when regNumber is invalid input', function() {
        let regNum = '@34ggfcgfg';
        let location = 'EC';
        assert.equal(regCheck(regNum, location), false);
    });

    it('Indicates failure when location is invalid input', function() {
        let regNum = 'CA 123 EC';
        let location = '@34ggfcgfg';
        assert.equal(regCheck(regNum, location), false);
    });
});