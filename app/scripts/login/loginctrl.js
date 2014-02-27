'use strict';

angular.module('ccpWebClientApp')
  .controller('LoginCtrl', function($scope, $location, CredentialsValidator, Session, PersistentSession) {
    function storeSession(session) {
      Session.login(session);
      if ($scope.storeSession) {
        PersistentSession.store(session);
      }
    }

    function setCorrectLogin(session) {
      storeSession(session);
      $scope.isLoginCorrect = true;
      $scope.isLoginIncorrect = false;
    }

    function redirect() {
      var nextPath = $location.search().nextPath;
      $location.path(nextPath ? nextPath : '');
    }

    $scope.login = function() {
      $scope.isLoginInProgress = true;
      CredentialsValidator.obtainCredentials($scope.username, $scope.password)
        .then(function(result) {
          $scope.isLoginInProgress = false;
          if (result.isLoginCorrect) {
            setCorrectLogin(result);
            redirect();
          } else {
            $scope.isLoginIncorrect = true;
          }
        });
    };

  });