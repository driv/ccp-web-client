'use strict';

describe('Service: Session', function() {

  // load the service's module
  beforeEach(module('ccpWebClientApp'));

  // instantiate service
  var Session;
  beforeEach(inject(function(_Session_) {
    Session = _Session_;
  }));

  it('should not be logged in nor have user data', function() {
    expect(Session.isLogged()).toBe(false);
    expect(Session.getUserData()).toBe(null);
  });

  it('should store login data', function() {
    var userId = 'User_ID';
    Session.login(userId);
    expect(Session.isLogged()).toBe(true);
    expect(Session.getUserData()).toEqual(userId);
  });

  it('should clean data after logout', function() {
    Session.login();
    Session.logout();
    expect(Session.isLogged()).toBe(false);
    expect(Session.getUserData()).toBe(null);
  });

  it('should not be logged without user data', function() {
    Session.login();

    expect(Session.isLogged()).toBe(false);
  });
});