describe('The mostProfitableDepartment Function', function() {
    it('mostProfitableDepartment should return hardware as the most profitable department', function() {
        var itemList = [{"department":"carpentry","sales":5500,"day":"Monday"},{"department":"hardware","sales":7500,"day":"Tuesday"},]
        assert.equal(mostProfitableDepartment(itemList), "hardware");
    });

    it('mostProfitableDepartment should return type string', function() {
        var itemList = [{"department":"carpentry","sales":5500,"day":"Monday"},{"department":"hardware","sales":7500,"day":"Tuesday"},]
        var result = mostProfitableDepartment(itemList);
        assert.typeOf(result, 'string');
    });

    it('mostProfitableDepartment should accept an array as the parameter', function() {
        var itemList = [{"department":"carpentry","sales":5500,"day":"Monday"},{"department":"hardware","sales":7500,"day":"Tuesday"},]
        var result = mostProfitableDepartment(itemList);
        assert.isArray(itemList);
    });
});