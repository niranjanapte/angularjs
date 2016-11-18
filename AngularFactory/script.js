//Defining Factory    
var app = angular.module('app', []);    
    
app.factory('calculatorService', function(){      
    var calculator = {};     
    calculator.multiply = function(a, b) { return a * b };    
    calculator.add = function(a, b) { return a + b };   
    calculator.substract = function(a, b) { return a - b };   
    calculator.divide = function(a, b) { return a / b };   
    return calculator;      
});    
     
app.controller('CalculatorController', function($scope, calculatorService) {    
    $scope.doMultiply = function() {   
        $scope.answer = calculatorService.multiply($scope.number,$scope.number);    
    }    
    $scope.doAddition = function() {   
        $scope.answer = calculatorService.add($scope.number,$scope.number);    
    }   
    $scope.doSubstraction = function() {   
        $scope.answer = calculatorService.substract($scope.number,$scope.number);    
    }   
    $scope.doDivision = function() {   
        $scope.answer = calculatorService.divide($scope.number,$scope.number);    
    }   
});    