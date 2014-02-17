'use strict';

describe('Service: AutomaticLogin', function() {

  // load the service's module
  beforeEach(module('ccpWebClientApp'));

  // instantiate service
  var AutomaticLogin,
    PersistentSession,
    Session;
  beforeEach(inject(function(_AutomaticLogin_, _PersistentSession_, _Session_) {
    AutomaticLogin = _AutomaticLogin_;
    PersistentSession = _PersistentSession_;
    Session = _Session_;
  }));

  it('should do something', function() {
    expect( !! AutomaticLogin).toBe(true);
  });

  it('should retrieve the persisted session data', function() {
    spyOn(PersistentSession, 'retrieve');

    AutomaticLogin.login();

    expect(PersistentSession.retrieve).toHaveBeenCalled();
  });

  it('should store retrieved data to Session', function() {
    spyOn(Session, 'login');
    var persistedSession = {
      userId: 'userId',
      sessionId: 'sessionId'
    };
    spyOn(PersistentSession, 'retrieve').andReturn(persistedSession);

    AutomaticLogin.login();

    expect(Session.login).toHaveBeenCalledWith(persistedSession);
  });

  it('should not store data to session if no data has been retrieved', function() {
    spyOn(Session, 'login');
    spyOn(PersistentSession, 'retrieve').andReturn(null);

    AutomaticLogin.login();

    expect(Session.login).not.toHaveBeenCalled();
  });

});