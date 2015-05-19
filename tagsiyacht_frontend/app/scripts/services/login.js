'use strict';

/**
 * @ngdoc service
 * @name app.Login
 * @description
 * # Login
 * Factory in the app.
 */
angular.module('app')
  .factory('Login', ['$http', '$q', function ($http, $q) {
    return {
      login: function(user) {
        var deferred = $q.defer()
        $http.post('/rest/login/', user).
          success(function(data, status, headers, config) {
            console.log("Succeed");
            deferred.resolve(data);
          }).
          error(function(data, status, headers, config) {
            console.log("Error");
            deferred.reject(data);
          });
        return deferred.promise
      },
      logout: function() {
        var deferred = $q.defer()
        $http.post('/rest/logout/').
          success(function(data, status, headers, config) {
            console.log("Succeed");
            deferred.resolve(data);
          }).
          error(function(data, status, headers, config) {
            console.log("Error");
            deferred.reject(data);
          });
        return deferred.promise
      }
    }
  }]);
