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
        .state('kurti', {
            url: "/products/:type/:anc",
            templateUrl: "partials/kurtis.html",
            params: { type: "kurti", anc: "1" }
        })
        .state('dress', {
            url: "/products/:type/:anc",
            templateUrl: "partials/kurtis.html",
            params: { type: "dress", anc: "1" }
        })
        .state('leggins', {
            url: "/products/:type/:anc",
            templateUrl: "partials/kurtis.html",
            params: { type: "leggins", anc: "1" }
        })
        .state('details/:type/:id',{
          url:"/details/:type/:id",
          "templateUrl":"partials/product-detail.html",
          controller : 'DetailsController'
        })
        .state('girls',{
          url: "/products/:type/:anc",
          templaeUrl : "partials/kurtis.html",
          params: { type: "girls", anc: "1" }
        })
        .state('boys',{
          url: "/products/:type/:anc",
          templateUrl : "partials/kurtis.html",
          params: {type: "boys",anc: "1"}
        });
})
