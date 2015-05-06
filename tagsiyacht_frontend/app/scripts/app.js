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
  .config(function ($stateProvider, $urlRouterProvider) {

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
        controller: 'YachtCtrl'
      })
      .state('main.detail', {
        url: '/:id',
        templateUrl: 'views/yacht-detail.html',
        controller: 'YachtCtrl'
      })
      .state('mail.profile', {
        url: '/profile',
        templateUrl: 'views/profile.html',
        controller: 'ProfileCtrl'
      });

  });
