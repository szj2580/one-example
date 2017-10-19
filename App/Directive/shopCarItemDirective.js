/**
 * Created by Nan on 2017/7/25.
 */
app.directive('shopcarItem', function () {
    return {
        restrict: 'EA',
        transclude: true,
        scope:{
            item:"=item",
            index:"@index"
        },
        templateUrl: 'App/View/template/shoppingcarItem.html',
        controller: 'shopCarItemController'
    }
});