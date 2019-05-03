// Check if input is a string
// Check if input is seperated with a comma
// Check if non-string value is passed as parameter 
// 
// 

describe('The countAllPaarl() function', function() {
    it('Returns the number of registration numbers in the string for Paarl', function() {
        assert.equal( 3, countAllPaarl('CJ 345 123, CJ 2345, CL 123-546, CK 345, CJ 123') );
    });

    // it('Returns the number of registration numbers in the string for Paarl', function() {
    //     assert.equal(1, countAllPaarl('CJ 123'));
    // });
});