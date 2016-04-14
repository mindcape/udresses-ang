'use strict';

/* Services */

var uDressesServices = angular.module('uDressesServices', ['ngResource']);

uDressesServices.factory('loadService', ['$resource',
  function($resource){
    return $resource('data/list.json', {}, {
      query: {method:'GET', isArray:true}
    });
}]);

uDressesServices.factory('detailsService', ['$q','$resource','$filter',
    function($q, $resource,$filter){
      var service={};
      service.getItem=function(obj) {
        var itemsDefer=$q.defer();
        $resource('data/list.json').query({},function(data) {
           var item= $filter('filter')(data,{flikid:obj})[0];
           itemsDefer.resolve(item);
        });
        return itemsDefer.promise;
      }
      return service;
}]);
