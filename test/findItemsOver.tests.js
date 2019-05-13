describe('The findItemsOver Function', function() {
    var items = [{"name":"apples","qty":10},{"name":"pears","qty":37},{"name":"bananas","qty":27},{"name":"apples","qty":3}];
    var entry = 30;

    it('Should return all the items that have a quantity that is greater than an entry input', function() {
        var result = findItemsOver(items, entry);
        var expectedResult = [{"name":"pears","qty":37}];
        assert.deepEqual(result, expectedResult);
    });

    it('Should return false when an invalid data is provided as input', function() {
        assert.equal(findItemsOver('@#$%%^^^', entry), false);
    });

    it('findItemsOver should return an output of type array', function() {
        var result = findItemsOver(items, entry);
        assert.typeOf(result, 'array');
    });

    it('Should accept an array as the first argument', function() {
        assert.isArray(items);
    });

    it('Should accept a number as the second argument', function() {
        assert.isNumber(entry, 'Expecting the number as the second parameter');
    });

});