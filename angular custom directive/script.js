// Code goes here

var app = angular.module('app',[]);

app.controller('empctrl',['$scope',function($scope){
      //$scope.msg='First Simple Custom Directive';
      $scope.msg='Custom Directive using ng-template';
}]);

app.directive('myMsg',function(){
      return{
           // template:'<strong>First Simple Custom Directive</strong>'
            // template:'<strong>{{msg}}</strong>'
            //templateUrl:'my-msg.html' //'my-msg' extension need not be required
             templateUrl:'my-info-msg.html'
      };
});