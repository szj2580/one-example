/**
 * Created by Nan on 2017/10/18.
 */

app.controller("shoppingcarController", ["$scope", "shoppingcarServer", function ($scope, shoppingcarServer) {
    function price() {
        $scope.goodsCount = 0;
        $scope.goodsPrice = 0;

        $scope.productItems.forEach(function (item) {
            if (item.state) {
                $scope.goodsCount += item.num;
                $scope.goodsPrice += item.num * item.price;
            }
        });
    }

    shoppingcarServer.getProducts("GET", "http://localhost:8080/api").then(function (result) {
        $scope.productItems = result;
        price();
    });


    $scope.checkAll = function () {
        if (!$scope.flag) {
            $scope.flag = true;
            $scope.productItems.forEach(function (item, index) {
                item.state = true;
            });
        } else {
            $scope.flag = false;
            $scope.productItems.forEach(function (item, index) {
                item.state = false;
            });
        }
        price();
    };

    $scope.$on("deleteItem", function (event, index) {
        $scope.productItems.splice(index, 1);
    });

    $scope.$on("checkItem", function (event, index) {
        var items = $scope.productItems;
        var count = 0;
        items[index].state = !items[index].state;
        for (var i = 0; i < items.length; i++) {
            if (items[i].state) {
                count++;
            }
        }
        if (count == items.length) {
            $scope.flag = true;
        } else {
            $scope.flag = false;
        }
        price();
    });

    $scope.$on('changeCount', function (event) {
        price();
    });
}]);