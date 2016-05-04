'use strict';

/* Controllers */

var uDressesControllers = angular.module('uDressesControllers', ['ui.bootstrap','angular-flexslider']);

uDressesControllers.controller('kurtisController', ['$scope','$http', '$filter', 'loadService','$uibModal','$stateParams',
  function($scope, $http, $filter, loadService, $uibModal,$stateParams) {
    if($stateParams.type == 'kurti'){
      $scope.productType = 'Kurtis';
      $scope.typeHeaderText = 'Designer Kurtis Collection'
    } else {
      $scope.productType = 'Dresses';
      $scope.typeHeaderText = 'Custom stitched dresses'
    }
    loadService.queryItems($stateParams.type).then(function(items){
      $scope.products = items;
      var photoset_id;
      if($stateParams.type == 'kurti'){
        photoset_id = 7215766463999466+3;
      } else {
        photoset_id = 72157667790506966;
      }
      var furl = 'https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&user_id=140071727%40N03&photoset_id='+photoset_id+'&api_key=3d9a471e55f44c4d04503ae04cd304fe&format=json&jsoncallback=JSON_CALLBACK';
      $http.jsonp(furl)
        .success(function(data) {
          var photos = data.photoset.photo;
          angular.forEach($scope.products,function(dress){
              var photo = $filter('filter')(photos,{title:dress.flikid})[0];
              dress.image = "https://farm"+photo.farm+".staticflickr.com/"+photo.server+"/"+photo.id+"_"+photo.secret+"_b.jpg";
          })
      })
    });
    var log = [];

    $scope.quickView = function(){
      $uibModal.open({
        templateUrl: "https://1.bp.blogspot.com/-9zJPBaHKUJY/Vt_cOo9pqTI/AAAAAAAA1Hw/o7-j98hEwfY/s1600/7226.jpg"
      })
    }
}]);


uDressesControllers.controller('DetailsController', ['$scope','$http', '$filter','loadService','detailsService','$uibModal','$stateParams',
  function($scope, $http, $filter,loadService, detailsService, $uibModal, $stateParams) {


    detailsService.getItem($stateParams.id,$stateParams.type).then(function(item) {
        $scope.details=item;
        var photoset_id;
        if($scope.details.actor == 'kurti'){
          $scope.details.type = 'Kurtis';
          photoset_id = 7215766463999466+'3';
        } else {
          $scope.details.type = 'Dresses';
          photoset_id = 7215766779050696+'6';
        }
        var furl = 'https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&user_id=140071727%40N03&photoset_id='+photoset_id+'&api_key=3d9a471e55f44c4d04503ae04cd304fe&format=json&jsoncallback=JSON_CALLBACK';
        $http.jsonp(furl).success(function(data) {
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

uDressesControllers.controller('BasicSliderController',['$scope','$http',function($scope, $http){
$scope.slides = [];
  $http.jsonp("https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&user_id=140071727%40N03&photoset_id=72157667172866745&api_key=3d9a471e55f44c4d04503ae04cd304fe&format=json&jsoncallback=JSON_CALLBACK")
  .success(function(data) {
    angular.forEach(data.photoset.photo, function(photo){
      $scope.slides.push("https://farm"+photo.farm+".staticflickr.com/"+photo.server+"/"+photo.id+"_"+photo.secret+"_z.jpg");
    })
  })

  // $scope.slides = [
  //     'https://1.bp.blogspot.com/-9zJPBaHKUJY/Vt_cOo9pqTI/AAAAAAAA1Hw/o7-j98hEwfY/s1600/7226.jpg',
  //     'https://2.bp.blogspot.com/-iCUBNpJpR-A/Vs313-6dsjI/AAAAAAAAz6I/dW96I-zFOeM/s1600/M3%2B%25289%2529.jpg',
  //     'https://2.bp.blogspot.com/-ZD9mYaG4Vqo/Vt1vVnVt-aI/AAAAAAAA0u4/NskIEfkLOi4/s1600/26.jpg'
  //   ];
}]);
