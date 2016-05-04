'use strict';

/* App Module */

var uDressesApp = angular.module('uDresses', [
  'ui.bootstrap', 'ui.router', 'ui.navbar',
  'uDressesAnimations',
  'uDressesDirectives',
  'uDressesControllers',
  'uDressesFilters',
  'uDressesServices',
  'ngCart'
]);

 uDressesApp.config(function ($stateProvider, $urlRouterProvider) {

    // For any unmatched url, redirect to /state1
    $urlRouterProvider.otherwise("/home");

    // Now set up the states
    $stateProvider
        .state('home', {
            url: "/home",
            templateUrl: "partials/home.html"
        })
        .state('kurtis', {
            url: "/products/:type",
            templateUrl: "partials/kurtis.html"
        })
        .state('dresses', {
            url: "/products/:type",
            templateUrl: "partials/kurtis.html"
        })
        .state('details/:type/:id',{
          url:"/details/:type/:id",
          "templateUrl":"partials/product-detail.html",
          controller : 'DetailsController'
        })
        .state('ucheckout',{
          url : "/ucheckout",
          templateUrl : "partials/ufCheckOut.html",
          controller : 'uCartController'
        });
})
