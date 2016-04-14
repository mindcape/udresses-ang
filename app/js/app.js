'use strict';

/* App Module */

var uDressesApp = angular.module('uDresses', [
  'ui.bootstrap', 'ui.router', 'ui.navbar',
  'uDressesAnimations',
  'uDressesDirectives',
  'uDressesControllers',
  'uDressesFilters',
  'uDressesServices'
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
            url: "/kurtis",
            templateUrl: "partials/kurtis.html",
            resolve: {
              mutants : function(loadService){
              return loadService.query;
            }
          }
        })
        .state('dresses', {
            url: "/dresses",
            templateUrl: "partials/dresses.html"
        })
        .state('details/:id',{
          url:"/details/:id",
          "templateUrl":"partials/product-detail.html",
          controller : 'DetailsController'
        });
})
