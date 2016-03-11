'use strict';

/* Services */

var uDressesServices = angular.module('uDressesServices', ['ngResource']);

uDressesServices.factory('loadService', ['$resource',
  function($resource){
    return $resource('data/list.json', {}, {
      query: {method:'GET', isArray:true}
    });
  }]);
