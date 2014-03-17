'use strict';

describe('Controller: RegisterUserCtrl', function() {

  // load the controller's module
  beforeEach(module('users'));

  var RegisterUserCtrl,
    scope,
    UserResource;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($controller, $rootScope, _UserResource_) {
    scope = $rootScope.$new();
    RegisterUserCtrl = $controller('RegisterUserCtrl', {
      $scope: scope
    });
    UserResource = _UserResource_;
  }));

  it('should inject the controller', function() {
    expect( !! RegisterUserCtrl).toBe(true);
  });

  it('should define a register function', function() {
    expect(scope.register).toBeDefined();
  });

  it('should send user data to the resource service', function() {
    spyOn(UserResource, 'save').andCallThrough();
    var userData = {
      username: 'username',
      password: 'password'
    };
    scope.user = userData;

    scope.register();

    expect(UserResource.save).toHaveBeenCalledWith({
      user: userData
    });
  });
});