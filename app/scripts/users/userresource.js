'use strict';

angular.module('ccpWebClientApp')
	.factory('UserResource', function($resource, ENV) {
		return $resource(ENV.apiEndpoint + '/users/:id', {
			id: '@id'
		});
	});