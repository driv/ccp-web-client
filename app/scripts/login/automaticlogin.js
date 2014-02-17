'use strict';

angular.module('ccpWebClientApp')
  .service('AutomaticLogin', function Automaticlogin(PersistentSession, Session) {
    this.login = function() {
      var retrievedSession = PersistentSession.retrieve();
      if (retrievedSession) {
        Session.login(retrievedSession);
      }
    };
  });