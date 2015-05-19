'use strict';

/**
 * @ngdoc overview
 * @name tagsiyachtFrontendApp
 * @description
 * # tagsiyachtFrontendApp
 *
 * Main module of the application.
 */
angular
  .module('app', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ui.router',
    'ui.materialize',
    'http-auth-interceptor'
  ])
  .config(function ($stateProvider, $urlRouterProvider, $httpProvider) {

    $httpProvider.defaults.xsrfCookieName = 'csrftoken';
    $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';

    $urlRouterProvider.otherwise('/yachts');

    $stateProvider
      .state('login', {
        url: '/login',
        templateUrl: 'views/login.html',
        controller: function($scope, $state, Login, authService) {
          $scope.user = {
            'username': '',
            'password': ''
          }
          $scope.submit = function() {
            console.log("MainCtrl - login submit", $scope.user);
            $scope.error = undefined;
            Login.login($scope.user).then( 
              function(response){
                console.log(response);
                authService.loginConfirmed();
                $state.go('main.yachts');
              }, 
              function(response) {
                console.log(response);
                $scope.error = response;
              });
          }
        }
      })
      .state('main', {
        abstract: true,
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .state('main.yachts', {
        url: '/yachts',
        templateUrl: 'views/yachts.html',
        resolve: {
          yachts: function (Yacht) {
            return Yacht.query().$promise;
          }
        },
        controller: 'YachtCtrl'
      })
      .state('main.detail', {
        url: '/detail/:id',
        templateUrl: 'views/yacht-detail.html',
        resolve: {
          yachts: function (Yacht) {
            return Yacht.query().$promise;
          }
        },
        controller: 'YachtCtrl'
      })
      .state('main.signup', {
        url: '/user/signup',
        templateUrl: 'views/signup.html',
        controller: 'SignupCtrl'
      })
      .state('main.profile', {
        url: '/profile',
        templateUrl: 'views/profile.html',
        controller: 'ProfileCtrl'
      });
  })
  .config(['$resourceProvider', function($resourceProvider) {
    // Don't strip trailing slashes from calculated URLs
    $resourceProvider.defaults.stripTrailingSlashes = false;
  }])
  .run(function ($rootScope){
    $rootScope.authenticated = true;
    $rootScope.$on('event:auth-forbidden', function() {
      console.log("FORBIDEN!");
      $rootScope.authenticated = false;
      window.location.href = '/#/login';
    });
    $rootScope.$on('event:auth-loginRequired', function() {
      console.log("LOGIN REQUIRED!");
      $rootScope.authenticated = false;
    });
    $rootScope.$on('event:auth-loginConfirmed', function() {
      console.log("LOGIN CONFIRMED!");
      $rootScope.authenticated = true;
    });
  });
