function findItemsOver(items, entry) {
    var itemsOver = [];
    for(var i = 0; i < items.length; i++) {
        var item = items[i];
        if(item.qty > entry) {
          itemsOver.push(item);
            //console.log(item);
        }
    }
    return itemsOver;
}

var items = [{"name":"apples","qty":10},{"name":"pears","qty":37},{"name":"bananas","qty":27},{"name":"apples","qty":3}]
console.log(findItemsOver(items, 30));