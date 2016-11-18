

angular.module('app', [])
.controller('Cust1Controller', ['$scope', function ($scope) {
    $scope.customer = {
        name: 'amit',
        address: 'sinhagad road'
    };
}])
.controller('Cust2Controller', ['$scope', function ($scope) {
    $scope.customer = {
        name: 'suresh',
        address: 'kothrud'
    };
}])
.directive('myCustomer', function () {
    return {
        restrict: 'E',
        templateUrl: 'my-customer.html'
    };
});
