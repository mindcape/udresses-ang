'use strict';

/* Controllers */

var uDressesControllers = angular.module('uDressesControllers', ['ui.bootstrap']);

// uDressesControllers.controller('PhoneListCtrl', ['$scope', 'Phone',
//   function($scope, Phone) {
//     $scope.phones = Phone.query();
//     $scope.orderProp = 'age';
//   }]);

uDressesControllers.controller('kurtisController', ['$scope', 'loadService','$uibModal',
  function($scope,  loadService, $uibModal) {

    $scope.mutants = loadService.query();


    $scope.quickView = function(){
      $uibModal.open({
        templateUrl: "https://1.bp.blogspot.com/-9zJPBaHKUJY/Vt_cOo9pqTI/AAAAAAAA1Hw/o7-j98hEwfY/s1600/7226.jpg"
      })
    }

  }]);

uDressesControllers.controller('NavigationController', ['$scope' , function ($scope) {

    $scope.tree = [{
        name: "kurtis",
        link: "kurtis",
    }];


}])
