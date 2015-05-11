'use strict';

/**
 * @ngdoc service
 * @name app.Yacht
 * @description
 * # Yacht
 * Factory in the app.
 */
angular.module('app')
  .factory('Yacht', function ($resource) {
    return $resource('/rest/yachts');
  });
