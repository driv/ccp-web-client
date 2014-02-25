'use strict';

angular.module('ccpWebClientApp')
  .factory('SessionResource', function($resource, ENV) {
    return $resource(ENV.apiEndpoint + '/sessions/:id', {
      id: '@id'
    });
  });