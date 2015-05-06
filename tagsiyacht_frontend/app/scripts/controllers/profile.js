'use strict';

/**
 * @ngdoc function
 * @name app.controller:ProfileCtrl
 * @description
 * # ProfileCtrl
 * Controller of the app
 */
angular.module('app')
  .controller('ProfileCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
