'use strict';

angular.module('ccpWebClientApp')
  .controller('LoginCtrl', function($scope, CredentialsValidator, Session, PersistentSession) {
    function storeSession(session) {
      Session.login(session);
      if ($scope.storeSession) {
        PersistentSession.store(session);
      }
    }

    $scope.login = function() {
      $scope.isLoginInProgress = true;
      CredentialsValidator.obtainCredentials($scope.username, $scope.password)
        .then(function(result) {
          $scope.isLoginInProgress = false;
          if (result.isLoginCorrect) {
            storeSession(result);
            $scope.isLoginCorrect = true;
            $scope.isLoginIncorrect = false;
          } else {
            $scope.isLoginIncorrect = true;
          }
        });
    };

  });