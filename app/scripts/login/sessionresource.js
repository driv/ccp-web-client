'use strict';

angular.module('login')
  .factory('SessionResource', function($resource, ENV) {
    return $resource(ENV.apiEndpoint + '/sessions/:id', {
      id: '@id'
    });
  });