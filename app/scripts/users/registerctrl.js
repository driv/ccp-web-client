'use strict';

angular.module('users')
	.controller('RegisterUserCtrl', function($scope, UserResource) {
		$scope.register = function() {
			UserResource.save({
				user: $scope.user
			});
		};
	});