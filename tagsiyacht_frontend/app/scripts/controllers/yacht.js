'use strict';

/**
 * @ngdoc function
 * @name app.controller:YachtCtrl
 * @description
 * # YachtCtrl
 * Controller of the app
 */
angular.module('app')
  .controller('YachtCtrl', function ($scope, $http) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $http.get('/rest/yachts')
      .then(function (data){
        console.log(data);
      });

  });
