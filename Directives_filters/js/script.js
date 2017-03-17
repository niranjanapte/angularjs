 angular.module("myapp", [])
     .controller("MyController", function($scope) {
         $scope.myData = {};
         $scope.myData.showIt = true;
         $scope.myData.switch = 3;
         $scope.myData.textf = function() {
             return "outputing result from an interpolated function textf";
         };
         $scope.myData.injectf = function() {
             return "result containing HTML tags <h2>HTML Injection</h2>";
         };

         $scope.myData.items = [{
             text: "one"
         }, {
             text: "two"
         }, {
             text: "three"
         }];

         $scope.myData.getItems = function() {
             return this.items;
         };
         $scope.myData.myObject = {
             var1: "val1",
             var2: "val3",
             var3: "val3"
         };
         $scope.itemFilter = function(item) {

             if (item.text == "two") {
                 return false;
             } else {
                 return true;
             }
         }
         $scope.myData.theDate = getDate();


     });