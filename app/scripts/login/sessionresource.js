'use strict';

var ApiUrl = 'http://localhost\\:3000';

angular.module('ccpWebClientApp')
  .factory('SessionResource',  function($resource) {
    return $resource(ApiUrl + '/sessions/:id', {
      id: '@id'
    });
  });
