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
      } else   if(type=='dress'){
        url = 'data/listd.json'
      } else   if(type=='boys'){
        url = 'data/listb.json'
      } else   if(type=='girls'){
        url = 'data/listg.json'
      } else   if(type=='leggins'){
        url = 'data/listl.json'
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
    },

    service.getActorDetails= function(type) {
      var actorDetails = {
        dressType : '',
        actorType : '',
        photosetId : ''
      }

      if(type == 'kurti'){
        actorDetails.dressType = "Designer kurti"
        actorDetails.actorType = 'Kurtis';
        actorDetails.photosetId = 7215766463999466+'3';
      } else if(type == 'dress' ){
        actorDetails.dressType = "Custom stitched dress"
        actorDetails.actorType = 'Dresses';
        actorDetails.photosetId = 7215766779050696+'6';
      } else if(type == 'boys'){
        actorDetails.dressType = "Hand Picked Boys Dress"
        actorDetails.actorType="Boys";
        actorDetails.photosetId = 7215766828374136 + '1'
      } else if(type == 'girls'){
        actorDetails.dressType = "Hand Picked Girls Dress"
        actorDetails.actorType="Girls";
        actorDetails.photosetId = 7215766610928416 + '3'
      } else if(type == 'leggins'){
        actorDetails.dressType = "Ultra Soft Leggins"
        actorDetails.actorType="Leggins";
        actorDetails.photosetId = 7215766851927248 + '1'
      }

      return actorDetails;
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
        } else   if(type=='dress'){
          url = 'data/listd.json'
        } else   if(type=='boys'){
          url = 'data/listb.json'
        } else   if(type=='girls'){
          url = 'data/listg.json'
        }else   if(type=='leggins'){
          url = 'data/listl.json'
        }
        $resource(url).query({},function(data) {
           var item= $filter('filter')(data,{flikid:id})[0];
           itemsDefer.resolve(item);
        });
        return itemsDefer.promise;
      }
      return service;
}]);
