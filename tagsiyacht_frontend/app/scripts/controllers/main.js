'use strict';

/**
 * @ngdoc function
 * @name tagsiyachtFrontendApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the tagsiyachtFrontendApp
 */
angular.module('app')
  .controller('MainCtrl', function ($scope, Login, $rootScope, $state) {

    $scope.logout = function() {
      console.log('Logout');
      Login.logout().then(
        function(response) {
          $rootScope.authenticated = false;
          console.log(response);
          $state.go('login');
        },
        function(response) {
          console.log(response);
        });
    }

  });
