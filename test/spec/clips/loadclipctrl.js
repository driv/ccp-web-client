'use strict';

describe('Controller: LoadClipCtrl', function() {

  // load the controller's module
  beforeEach(module('clips'));

  var LoadClipCtrl,
    ClipLoader,
    Session;

  var scope;
  // Initialize the controller and a mock scope
  beforeEach(inject(function($controller, $rootScope) {
    scope = $rootScope.$new();
    LoadClipCtrl = $controller('LoadClipCtrl', {
      $scope: scope
    });
  }));

  beforeEach(inject(function(_ClipLoader_) {
    ClipLoader = _ClipLoader_;
    spyOn(ClipLoader, 'loadLastClip').andReturn({
      id: 1,
      payload: 'payload'
    });
  }));

  beforeEach(inject(function(_Session_) {
    Session = _Session_;
    Session.login({
      userId: 1
    });
  }));

  it('should be injected', function() {
    expect( !! LoadClipCtrl).toBe(true);
  });

  it('should define a loadLastClip function', function() {
    expect(scope.loadLastClip).toBeDefined();
  });

  it('should call loadLastClip of ClipLoader', function() {
    scope.loadLastClip();
    expect(ClipLoader.loadLastClip).toHaveBeenCalled();
  });

  it('should assign the clip to the scope', function() {
    scope.loadLastClip();
    scope.$apply();
    expect(scope.clip.id).toBe(1);
    expect(scope.clip.payload).toBe('payload');
  });

});