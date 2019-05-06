describe('The findItemsOver Function', function() {
  

 // it('Should return all the items that have a quantity that is more 20', function() {
    //     var items = [{"name":"apples","qty":10},{"name":"pears","qty":37},{"name":"bananas","qty":27},{"name":"apples","qty":3}];
    //     var result = findItemsOver20(items);
    //     var expectedResult = [{"name":"pears","qty":37},{"name":"bananas","qty":27}];
    //     assert.equal(result, expectedResult);
        
    // });

    it('findItemsOver should return type array', function() {
        var items = [{"name":"apples","qty":10},{"name":"pears","qty":37},{"name":"bananas","qty":27},{"name":"apples","qty":3}]
        var result = findItemsOver(items);
        assert.typeOf(result, 'array');
    });

    it('findItemsOver20 should accept an array as the parameter', function() {
        var items = [{"name":"apples","qty":10},{"name":"pears","qty":37},{"name":"bananas","qty":27},{"name":"apples","qty":3}]
        var result = findItemsOver(items);
        assert.isArray(items);
    });

    // it('findItemsOver20 should true if input is undefined', function() {
    //     var items = [{"name":"apples","qty":10},{"name":"pears","qty":37},{"name":"bananas","qty":27},{"name":"apples","qty":3}]
    //     var result = findItemsOver20(items);
    //     var expectedResult = [{"name":"pears","qty":37},{"name":"bananas","qty":27}];
    //     assert.equal(result, expectedResult);
    // });    

    
});