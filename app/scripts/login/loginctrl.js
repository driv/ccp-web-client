'use strict';

angular.module('ccpWebClientApp')
  .controller('LoginCtrl', function($scope, CredentialsValidator, Session, PersistentSession) {
    function storeSession(session) {
      Session.login(session);
      if($scope.storeSession){
        PersistentSession.store(session);
      }
    }

    $scope.login = function() {
      CredentialsValidator.obtainCredentials($scope.username, $scope.password)
        .then(function(result) {
          if(result.isLoginCorrect){
            storeSession(result);
          } else {
            $scope.loginStatus = 'Incorrect credentials.';
          }
        });
    };

  });