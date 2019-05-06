describe('The findItemsOver Function', function() {
    var items = [{"name":"apples","qty":10},{"name":"pears","qty":37},{"name":"bananas","qty":27},{"name":"apples","qty":3}];
    var entry = 30;

    it('Should return all the items that have a quantity that is greater than an entry input', function() {
        var result = findItemsOver(items, entry);
        var expectedResult = [{"name":"pears","qty":37}];
        assert.deepEqual(result, expectedResult);
    });

    it('findItemsOver should return an array', function() {
        var result = findItemsOver(items, entry);
        assert.typeOf(result, 'array');
    });

    it('Should accept an array as the first argument', function() {
        assert.isArray(items);
    });

    it('Should accept a number as the second argument', function() {
        assert.isNumber(entry, 'Expecting the number as the second parameter');
    });

    // it('findItemsOver20 should true if input is undefined', function() {
    //     var items = [{"name":"apples","qty":10},{"name":"pears","qty":37},{"name":"bananas","qty":27},{"name":"apples","qty":3}]
    //     var result = findItemsOver20(items);
    //     var expectedResult = [{"name":"pears","qty":37},{"name":"bananas","qty":27}];
    //     assert.equal(result, expectedResult);
    // });    

    
});