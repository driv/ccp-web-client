'use strict';

angular.module('login')
  .controller('LogoutCtrl', function($scope, Session) {
    $scope.logout = function() {
      Session.logout();
    };
  });