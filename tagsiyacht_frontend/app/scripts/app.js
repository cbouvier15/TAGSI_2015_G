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
    'ui.materialize'
  ])
  .config(function ($stateProvider, $urlRouterProvider, $httpProvider) {

    $httpProvider.defaults.xsrfCookieName = 'csrftoken';
    $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';

    $urlRouterProvider.otherwise('/yachts');

    $stateProvider
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
        controller: 'YachtCtrl'
      })
      .state('main.profile', {
        url: '/profile',
        templateUrl: 'views/profile.html',
        controller: 'ProfileCtrl'
      });

  });
