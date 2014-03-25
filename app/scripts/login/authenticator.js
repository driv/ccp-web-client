'use strict';

angular.module('login')
  .factory('authenticator', function(Session) {
    return {
      request: function(config) {
        config.headers = config.headers || {};
        if (Session.isLogged()) {
          var token = Session.getUserData().sessionId;
          config.headers.Authorization = 'Token token="' + token + '"';
        }
        return config;
      }
    };
  });