'use strict';

/**
 * @ngdoc service
 * @name app.client
 * @description
 * # client
 * Factory in the app.
 */
angular.module('app')
  .factory('Client', function ($resource) {
    return $resource('/rest/clients');
  });
