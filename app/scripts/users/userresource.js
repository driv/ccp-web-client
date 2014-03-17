'use strict';

angular.module('users')
  .factory('UserResource', function($resource, ENV) {
    return $resource(ENV.apiEndpoint + '/users/:id', {
      id: '@id'
    });
  });