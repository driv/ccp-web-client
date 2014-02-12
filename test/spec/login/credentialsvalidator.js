'use strict';

describe('Service: CredentialsValidator', function () {

  // load the service's module
  beforeEach(module('ccpWebClientApp'));

  // instantiate service
  var CredentialsValidator;

  //instantitate other modules
  var SessionResource,
    resourcePromise,
    rootScope;

  beforeEach(inject(function (_CredentialsValidator_,_SessionResource_, _$q_, _$rootScope_) {
    resourcePromise = _$q_.defer();
    rootScope = _$rootScope_;

    CredentialsValidator = _CredentialsValidator_;
    SessionResource = _SessionResource_;

    spyOn(SessionResource, 'save').andReturn({$promise: resourcePromise.promise});
  }));

  it('should have a function obtainCredentials', function () {
    expect(CredentialsValidator.obtainCredentials).toBeDefined();
  });

  it('should save the session', function () {
    var username = 'username',
      password = 'password';

    CredentialsValidator.obtainCredentials(username, password);

    expect(SessionResource.save).toHaveBeenCalledWith({username: username, password: password});
  });

  it('should return the session data when login is correct', function() {

    resourcePromise.resolve({
      'access_token':'luxaDeEK7JyhDiuH2JcUXQ',
      'user_id': 2
    });

    var output;
    CredentialsValidator
      .obtainCredentials('username', 'password')
      .then(function (result) {
        output = result;
      });
    rootScope.$apply();

    expect(output).toEqual({
        sessionId: 'luxaDeEK7JyhDiuH2JcUXQ',
        userId: 2,
        isLoginCorrect: true
      });
  });

  it('Should return an error if login is incorrect', function() {
    resourcePromise.reject({
      'status': 422
    });

    var output;
    CredentialsValidator
      .obtainCredentials('username', 'password')
      .then(function (result) {
        output = result;
      });
    rootScope.$apply();

    expect(output).toEqual({
      isLoginCorrect: false
    });
  });

  it('Should throw an exception if there is a server error', function () {
    resourcePromise.reject({
      'status': 'otherStatus'
    });

    CredentialsValidator.obtainCredentials('username', 'password');
    expect(rootScope.$apply).toThrow(new Error('Server error'));
  });
});
