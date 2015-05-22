'use strict';

/**
 * @ngdoc function
 * @name app.controller:SignupCtrl
 * @description
 * # SignupCtrl
 * Controller of the app
 */
angular.module('app')
  .controller('SignupCtrl', function ($state, $scope, Login) {
    $scope.signup = function(){
    	Login.signup($scope.user)
        .then(function(response){
          console.log("Signed up succesfully!", response);
          Login.login($scope.user)
            .then(function(){
              $state.go("main.yachts");    
            });          
        });
    };
  });
