'use strict';

angular.module('clips')
  .factory('ClipResource', function($resource, ENV) {
    return $resource(ENV.apiEndpoint + '/users/:userId/clips/:id', {
      id: '@id',
      userId: '@userId',
    });
  });