'use strict';

describe('Controller: LoginCtrl', function() {

  // load the controller's module
  beforeEach(module('ccpWebClientApp'));

  var LoginCtrl,
    scope,
    deferred,
    location,
    CredentialsValidator,
    Session,
    PersistentSession;

  var username = 'test_username',
    password = 'test_password';

  // Initialize the controller and a mock scope
  beforeEach(inject(function($controller, $rootScope, _CredentialsValidator_, _Session_, _$q_, _PersistentSession_, _$location_) {
    scope = $rootScope.$new();
    deferred = _$q_.defer();
    LoginCtrl = $controller('LoginCtrl', {
      $scope: scope
    });
    CredentialsValidator = _CredentialsValidator_;
    Session = _Session_;
    PersistentSession = _PersistentSession_;
    location = _$location_;
  }));

  it('Should have a clean scope', function() {
    expect(scope.login).toBeDefined();
    expect(scope.loginStatus).not.toBeDefined();
    expect(scope.storeSession).toBeFalsy();
    expect(scope.loginCorrect).toBeFalsy();
  });

  it('should pass user and password to the CredentialsValidator', function() {
    scope.username = username;
    scope.password = password;
    spyOn(CredentialsValidator, 'obtainCredentials').andCallThrough();

    scope.login();

    expect(CredentialsValidator.obtainCredentials).toHaveBeenCalledWith(username, password);
  });

  it('should store the session if the credentials are valid', function() {
    scope.username = username;
    scope.password = password;
    spyOn(Session, 'login').andCallThrough();
    mockCorrectLogin();

    scope.login();
    scope.$apply();

    expect(Session.login).toHaveBeenCalledWith(jasmine.any(Object));
  });

  it('should show errors and not store the session id if login is incorrect', function() {
    spyOn(Session, 'login');
    mockIncorrectLogin();

    scope.login();
    scope.$apply();

    expect(Session.login).not.toHaveBeenCalled();
    expect(scope.isLoginCorrect).toBeFalsy();
    expect(scope.isLoginIncorrect).toBeTruthy();
  });

  it('should store the session permanently if storeSession is set', function() {
    scope.storeSession = true;
    mockCorrectLogin();
    spyOn(PersistentSession, 'store').andCallThrough();

    scope.login();
    scope.$apply();

    expect(PersistentSession.store).toHaveBeenCalledWith(jasmine.any(Object));
  });

  it('should not store the session permanently if storeSession is not set', function() {
    scope.storeSession = false;
    mockCorrectLogin();
    spyOn(PersistentSession, 'store').andCallThrough();

    scope.login();
    scope.$apply();

    expect(PersistentSession.store).not.toHaveBeenCalled();
  });

  it('should change login flags if login is correct', function() {
    mockCorrectLogin();

    scope.login();
    expect(scope.isLoginInProgress).toBeTruthy();

    scope.$apply();

    expect(scope.isLoginCorrect).toBeTruthy();
    expect(scope.isLoginInProgress).toBeFalsy();
  });

  it('should remove the incorrect login flag when the login is correct', function() {
    scope.isLoginIncorrect = true;
    mockCorrectLogin();

    scope.login();
    scope.$apply();

    expect(scope.isLoginIncorrect).toBeFalsy();
  });

  it('should redirect to where the user was going after the login', function() {
    spyOn(location, 'search').andReturn({
      nextPath: 'newLocation'
    });
    mockCorrectLogin();

    scope.login();
    scope.$apply();

    expect(location.path()).toBe('/newLocation');
    expect(location.search().nextPath).toBeNull();
  });

  function mockCorrectLogin() {
    mockLogin(true);
  }

  function mockIncorrectLogin() {
    mockLogin(false);
  }

  function mockLogin(correct) {
    var mockResult = {
      isLoginCorrect: correct
    };
    deferred.resolve(mockResult);
    spyOn(CredentialsValidator, 'obtainCredentials')
      .andReturn(deferred.promise);
  }
});