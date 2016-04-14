'use strict';

/* Controllers */

var uDressesControllers = angular.module('uDressesControllers', ['ui.bootstrap','angular-flexslider']);

// uDressesControllers.controller('PhoneListCtrl', ['$scope', 'Phone',
//   function($scope, Phone) {
//     $scope.phones = Phone.query();
//     $scope.orderProp = 'age';
//   }]);

uDressesControllers.controller('kurtisController', ['$scope','$http', '$filter', 'loadService','$uibModal',
  function($scope, $http, $filter, loadService, $uibModal) {
    $scope.mutants = loadService.query();
    var log = [];
    $http.jsonp("https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&user_id=140071727%40N03&photoset_id=72157664639994663&api_key=3d9a471e55f44c4d04503ae04cd304fe&format=json&jsoncallback=JSON_CALLBACK")
      .success(function(data) {
        var photos = data.photoset.photo;
        angular.forEach($scope.mutants,function(dress){
            var photo = $filter('filter')(photos,{title:dress.flikid})[0];
            dress.image = "https://farm"+photo.farm+".staticflickr.com/"+photo.server+"/"+photo.id+"_"+photo.secret+"_b.jpg";
        })
    });
    $scope.quickView = function(){
      $uibModal.open({
        templateUrl: "https://1.bp.blogspot.com/-9zJPBaHKUJY/Vt_cOo9pqTI/AAAAAAAA1Hw/o7-j98hEwfY/s1600/7226.jpg"
      })
    }
}]);


uDressesControllers.controller('DetailsController', ['$scope','$http', '$filter','loadService','detailsService','$uibModal','$stateParams',
  function($scope, $http, $filter,loadService, detailsService, $uibModal, $stateParams) {
    console.log($stateParams.id);
    detailsService.getItem($stateParams.id).then(function(item) {
        $scope.details=item;
        $http.jsonp("https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&user_id=140071727%40N03&photoset_id=72157664639994663&api_key=3d9a471e55f44c4d04503ae04cd304fe&format=json&jsoncallback=JSON_CALLBACK")
        .success(function(data) {
          var photo = $filter('filter')(data.photoset.photo,{title:$stateParams.id})[0];
          $scope.details.image = "https://farm"+photo.farm+".staticflickr.com/"+photo.server+"/"+photo.id+"_"+photo.secret+"_z.jpg";
        })
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
