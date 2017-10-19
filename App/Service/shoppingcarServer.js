/**
 * Created by Nan on 2017/10/18.
 */
app.factory("shoppingcarServer", ["baseServer", function (baseServer) {
    return {
        getProducts: function (type, url) {
            return baseServer.ajax(type, url);
        }
    }
}]);