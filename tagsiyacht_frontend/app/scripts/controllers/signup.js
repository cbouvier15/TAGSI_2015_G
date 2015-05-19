'use strict';

/**
 * @ngdoc function
 * @name app.controller:SignupCtrl
 * @description
 * # SignupCtrl
 * Controller of the app
 */
angular.module('app')
  .controller('SignupCtrl', function ($state, $scope, User) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.signup = function(){
    	$scope.newUser = new User($scope.user);
    	var returned_user = $scope.newUser.$save();
		$state.go("main.yachts");
    };
  });
