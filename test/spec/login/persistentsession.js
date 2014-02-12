'use strict';

describe('Service: PersistentSession', function () {

  // load the service's module
  beforeEach(module('ccpWebClientApp'));

  // instantiate service
  var PersistentSession,
    $cookieStore;

  var userData;
  beforeEach(inject(function (_PersistentSession_,_$cookieStore_) {
    PersistentSession = _PersistentSession_;
    $cookieStore = _$cookieStore_;

    userData = {
      userId: 1,
      sessionId: '432043243920'
    };
  }));

  it('should use cookies to store the session', function () {
    expect(PersistentSession.store).toBeDefined();
    spyOn($cookieStore, 'put');

    PersistentSession.store(userData);
    expect($cookieStore.put).toHaveBeenCalledWith('userData', userData);
  });

  it('should be able to retrieve the stored session', function () {
    expect(PersistentSession.retrieve).toBeDefined();
    spyOn($cookieStore, 'get').andReturn(userData);

    var retrievedUserData = PersistentSession.retrieve();

    expect(retrievedUserData).toEqual(userData);
    expect($cookieStore.get).toHaveBeenCalledWith('userData');
  });
});
