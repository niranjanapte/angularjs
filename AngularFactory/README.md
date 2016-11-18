AngularJS Factory

In AngularJS services can be created using service, factory and provider. Service object contains few useful functions that you can call from Controllers, Directive and Filters etc.

A factory is a simple Javascript function which allows you to add some logic before creating the object. It returns the created object.

Syntax

    var module = angular.module('myapp', []);    
    module.factory('serviceName', function(){    
        return serviceObject;    
    });    