function findItemsOver20(items) {
   var itemsOver20 = [];
   for(var i = 0; i < items.length; i++) {
      var item = items[i];
        
      if(item.qty > 20) {
         itemsOver20.push(item);
      }
   }
    return itemsOver20;
}

var items = [{"name":"apples","qty":10},{"name":"pears","qty":37},{"name":"bananas","qty":27},{"name":"apples","qty":3}]
// [{"name":"apples","qty":10},{"name":"pears","qty":19},{"name":"bananas","qty":17},{"name":"apples","qty":3}]
// [{"name":"apples","qty":40},{"name":"pears","qty":20},{"name":"bananas","qty":23},{"name":"apples","qty":37}]

console.log(findItemsOver20(items))