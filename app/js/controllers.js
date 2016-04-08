'use strict';

/* Controllers */

var uDressesControllers = angular.module('uDressesControllers', ['ui.bootstrap','angular-flexslider']);

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


uDressesControllers.controller('DetailsController', ['$scope', 'loadService','detailsService','$uibModal','$stateParams',
  function($scope,  loadService, detailsService, $uibModal, $stateParams) {
    console.log($stateParams.id);
    detailsService.getItem($stateParams.id).then(function(item) {
        console.log(item);
          $scope.details=item;
    });
}]);

uDressesControllers.controller('NavigationController', ['$scope' , function ($scope) {
    $scope.tree = [{
        name: "kurtis",
        link: "kurtis",
    }];
}]);

uDressesControllers.controller('BasicSliderController',['$scope',function($scope){
  $scope.slides = [
      'https://1.bp.blogspot.com/-9zJPBaHKUJY/Vt_cOo9pqTI/AAAAAAAA1Hw/o7-j98hEwfY/s1600/7226.jpg',
      'https://2.bp.blogspot.com/-iCUBNpJpR-A/Vs313-6dsjI/AAAAAAAAz6I/dW96I-zFOeM/s1600/M3%2B%25289%2529.jpg',
      'https://2.bp.blogspot.com/-ZD9mYaG4Vqo/Vt1vVnVt-aI/AAAAAAAA0u4/NskIEfkLOi4/s1600/26.jpg'
    ];
}]);
