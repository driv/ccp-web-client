'use strict';

angular.module('ccpWebClientApp')
  .controller('LogoutCtrl', function($scope, Session) {
    $scope.logout = function() {
      Session.logout();
    };
  });