/**
 * Created by Nan on 2017/10/18.
 */
app.controller("shopCarItemController", function ($scope) {
    $scope.deleteItem = function (index) {
        $scope.$emit("deleteItem", index);
    };

    $scope.itemChecked = function (index) {
        $scope.$emit("checkItem", index);
    };
    $scope.itemCount = function (flag) {

        if (flag == "+") {
            $scope.item.num += 1;
        } else {
            if ($scope.item.num <= 1) return;
            $scope.item.num -= 1;
        }
        $scope.$emit("changeCount");
    }
});