'use strict';

angular.module('ccpWebClientApp')
	.controller('RegisterUserCtrl', function($scope, UserResource) {
		$scope.register = function() {
			UserResource.save({
				user: $scope.user
			});
		};
	});