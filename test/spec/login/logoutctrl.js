'use strict';

describe('Controller: LogoutCtrl', function() {

  // load the controller's module
  beforeEach(module('ccpWebClientApp'));

  var LogoutctrlCtrl,
    scope,
    Session;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($controller, $rootScope, _Session_) {
    scope = $rootScope.$new();
    LogoutctrlCtrl = $controller('LogoutCtrl', {
      $scope: scope
    });
    Session = _Session_;
  }));

  it('should define a logout function', function() {
    expect(scope.logout).toBeDefined();
  });

  it('should clean the session', function() {
    spyOn(Session, 'logout');

    scope.logout();

    expect(Session.logout).toHaveBeenCalled();
  });
});