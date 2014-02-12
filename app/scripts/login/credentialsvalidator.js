'use strict';

angular.module('ccpWebClientApp')
  .service('CredentialsValidator', function (SessionResource) {
    this.obtainCredentials = function(username, password) {
      function makeLoginData (result) {
          /*jshint sub: true */
          return {
            sessionId: result['access_token'],
            userId: result['user_id'],
            isLoginCorrect: true
          };
        }

      function makeErrorData (result) {
        if(result.status === 422){
          return {
            isLoginCorrect: false
          };
        } else {
          throw new Error('Server error');
        }
      }

      return SessionResource.save({username: username, password: password}).$promise
        .then(makeLoginData, makeErrorData);
    };
  });
