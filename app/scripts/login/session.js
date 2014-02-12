'use strict';

angular.module('ccpWebClientApp')
  .factory('Session', function() {
    var data = null;


    return {
      isLogged: function() {
        return !!data;
      },
      getUserData: function() {
        return data;
      },
      login: function(userData) {
        data = userData;
      },
      logout: function() {
        data = null;
      }
    };
  });