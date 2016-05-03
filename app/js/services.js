'use strict';

/* Services */

var uDressesServices = angular.module('uDressesServices', ['ngResource']);

uDressesServices.factory('loadService', ['$q','$resource','$filter',
  function($q, $resource,$filter){
    var service={};

    service.queryItems=function(type) {
      var itemsDefer=$q.defer();
      var url;
      if(type=='kurti'){
        url = 'data/listk.json';
      } else {
        url = 'data/listd.json'
      }
      $resource(url).query({},function(data) {
          var items=[];
          angular.forEach(data,function(item, i){
              if(item.actor == type){
                items.push(item);
              }
          })
         itemsDefer.resolve(items);
      });
      return itemsDefer.promise;
    }

    return service;

    // return $resource('data/list.json', {}, {
    //   query: {method:'GET', isArray:true}
    // });
}]);

uDressesServices.factory('detailsService', ['$q','$resource','$filter',
    function($q, $resource,$filter){
      var service={};
      service.getItem=function(id,type) {
        var itemsDefer=$q.defer();
        var url;
        if(type=='kurti'){
          url = 'data/listk.json';
        } else {
          url = 'data/listd.json'
        }
        $resource(url).query({},function(data) {
           var item= $filter('filter')(data,{flikid:id})[0];
           itemsDefer.resolve(item);
        });
        return itemsDefer.promise;
      }
      return service;
}]);
