'use strict';

/* Controllers */

var uDressesControllers = angular.module('uDressesControllers', ['ui.bootstrap','angular-flexslider']);

uDressesControllers.controller('kurtisController', ['$scope','$http', '$filter', 'loadService','$uibModal','$stateParams','$location','$anchorScroll','$timeout',
  function($scope, $http, $filter, loadService, $uibModal,$stateParams,$location,$anchorScroll,$timeout) {

    if($stateParams.type == 'kurti'){
      $scope.productType = 'Kurtis';
      $scope.typeHeaderText = 'Designer Kurtis Collection'
    } else  if($stateParams.type == 'dress'){
      $scope.productType = 'Dresses';
      $scope.typeHeaderText = 'Custom stitched dresses'
    } else if($stateParams.type == 'boys') {
      $scope.productType = 'Boys';
      $scope.typeHeaderText = 'Hand Picked Boys Dress Collection'
    } else if($stateParams.type == 'girls') {
      $scope.productType = 'Girls';
      $scope.typeHeaderText = 'Hand Picked Girls Dress Collection'
    } else if ($stateParams.type == 'leggins'){
      $scope.productType = 'Leggins';
      $scope.typeHeaderText = 'Ultra Soft Leggins'
    }

    loadService.queryItems($stateParams.type).then(function(items){
      $scope.products = items;
      var photoset_id;
      if($stateParams.type == 'kurti'){
        photoset_id = 7215766463999466+'3';
      } else if($stateParams.type == 'dress') {
        photoset_id = 7215766779050696+'6';
      } else if($stateParams.type == 'boys'){
          photoset_id = 7215766828374136 + '1'
      } else if($stateParams.type == 'girls'){
          photoset_id = 7215766610928416 + '3'
      } else if($stateParams.type == 'leggins'){
          photoset_id = 7215766851927248 + '1'
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
      if($stateParams.anc){
        $timeout(function() {
          $location.hash($stateParams.anc);
        });
      }
    });



    var log = [];

    $scope.quickView = function(){
      $uibModal.open({
        templateUrl: "https://1.bp.blogspot.com/-9zJPBaHKUJY/Vt_cOo9pqTI/AAAAAAAA1Hw/o7-j98hEwfY/s1600/7226.jpg"
      })
    }
}]);


uDressesControllers.controller('DetailsController', ['$scope','$http', '$filter','loadService','detailsService','$uibModal','$stateParams','$location','$state',
  function($scope, $http, $filter,loadService, detailsService, $uibModal, $stateParams,$location,$state) {


    detailsService.getItem($stateParams.id,$stateParams.type).then(function(item) {
        $scope.details=item;
        var photoset_id;
        if($scope.details.actor == 'kurti'){
          $scope.details.dressType = "Designer kurti"
          $scope.details.type = 'Kurtis';
          photoset_id = 7215766463999466+'3';
        } else if($scope.details.actor == 'dress' ){
          $scope.details.dressType = "Custom stitched dress"
          $scope.details.type = 'Dresses';
          photoset_id = 7215766779050696+'6';
        } else if($scope.details.actor == 'boys'){
          $scope.details.dressType = "Hand Picked Boys Dress"
          $scope.details.type="Boys";
          photoset_id = 7215766828374136 + '1'
        } else if($scope.details.actor == 'girls'){
          $scope.details.dressType = "Hand Picked Girls Dress"
          $scope.details.type="Girls";
          photoset_id = 7215766610928416 + '3'
        } else if($scope.details.actor == 'leggins'){
          $scope.details.dressType = "Ultra Soft Leggins"
          $scope.details.type="Leggins";
          photoset_id = 7215766851927248 + '1'
        }
        var furl = 'https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&user_id=140071727%40N03&photoset_id='+photoset_id+'&api_key=3d9a471e55f44c4d04503ae04cd304fe&format=json&jsoncallback=JSON_CALLBACK';
        $http.jsonp(furl).success(function(data) {
          var photo = $filter('filter')(data.photoset.photo,{title:$stateParams.id})[0];
          $scope.details.image = "https://farm"+photo.farm+".staticflickr.com/"+photo.server+"/"+photo.id+"_"+photo.secret+"_z.jpg";
        })
    });

    $scope.go_back = function(path,divId) {
           $state.transitionTo(path, {type:path, anc:divId},{reload:true});
    };


}]);

uDressesControllers.controller('NavigationController', ['$scope' , function ($scope) {

    $scope.kids = [{
      name: "Boys",link: "boys"
    },{
      name: "Girls", link : "girls"
    }]

    $scope.ladies = [{
      name: "Kurtis",link : "kurti"
    },{
      name: "Dresses",link : "dress"
    },{
      name : "Leggins",link : "leggins"
    }]
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
