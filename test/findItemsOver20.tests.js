// Testing for the expected out
// check if input is empty
// chech when is undefined
// check if input a number or any invalid input
// check when there is no item greater 20
// 
describe('The findItemsOver20 Function', function() {
    it('Should return "Pears and Bananas" when " {"name":"apples","qty":10},{"name":"pears","qty":37},{"name":"bananas","qty":27},{"name":"apples","qty":3} " is provided as input', function() {
        var items = [{"name":"apples","qty":10},{"name":"pears","qty":37},{"name":"bananas","qty":27},{"name":"apples","qty":3}];
        var result = findItemsOver20(items);
        var expectedResult = [{"name":"pears","qty":37},{"name":"bananas","qty":27}];
        assert.deepEqual(result, expectedResult);
    });

    it('Should return false when an invalid data is provided as input', function() {
        var items = '@#$%rtr';
        assert.equal(findItemsOver20(items), false);
    });

    it('findItemsOver20 should return an output of type array', function() {
        var items = [{"name":"apples","qty":10},{"name":"pears","qty":37},{"name":"bananas","qty":27},{"name":"apples","qty":3}]
        var result = findItemsOver20(items);
        assert.typeOf(result, 'array');
    });

    it('findItemsOver20 should accept an array as input data', function() {
        var items = [{"name":"apples","qty":10},{"name":"pears","qty":37},{"name":"bananas","qty":27},{"name":"apples","qty":3}]
        var result = findItemsOver20(items);
        assert.isArray(items);
    });
});