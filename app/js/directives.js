'use strict';

/* Directives */
var uDressesDirectives = angular.module('uDressesDirectives', ['ui.bootstrap']);

uDressesDirectives.directive('actorTile', ['$uibModal', function ($uibModal) {
    return {
      restrict: 'A',
      scope: {
        actor: '='
      },
      replace: true,
      templateUrl: 'partials/dress-template.html',
      link: function (scope, elem, attrs) {
        scope.hi = function () {
          //alert('Why hello there, I\'m ' + scope.actor.name + '.');
          $uibModal.open({
              templateUrl: "partials/quickView.html",
              scope : scope
          });
        };
        elem.find('img').on('click', function () {
          window.location.href = '#/details/'+scope.actor.id;
        });
      }
    };
}]);
