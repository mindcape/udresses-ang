'use strict';

/* Controllers */

var uDressesControllers = angular.module('uDressesControllers', []);

// uDressesControllers.controller('PhoneListCtrl', ['$scope', 'Phone',
//   function($scope, Phone) {
//     $scope.phones = Phone.query();
//     $scope.orderProp = 'age';
//   }]);

uDressesControllers.controller('kurtisController', ['$scope', 'loadService',
  function($scope,  loadService) {

    $scope.mutants = loadService.query();

  }]);

uDressesControllers.controller('NavigationController', ['$scope' , function ($scope) {

    $scope.tree = [{
        name: "kurtis",
        link: "kurtis",
    }];

    
}])
