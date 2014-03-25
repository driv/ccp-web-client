'use strict';

describe('Controller: CreateClipCtrl', function() {

  // load the controller's module
  beforeEach(module('clips'));

  var CreateClipCtrl,
    ClipCreator;
  var scope,
    deferred;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($controller, $rootScope) {
    scope = $rootScope.$new();
    CreateClipCtrl = $controller('CreateClipCtrl', {
      $scope: scope
    });
  }));

  beforeEach(inject(function(_$q_, _ClipCreator_) {
    ClipCreator = _ClipCreator_;
    deferred = _$q_.defer();
  }));

  it('should be injected', function() {
    expect( !! CreateClipCtrl).toBe(true);
  });

  it('should define a send function', function() {
    expect(scope.send).toBeDefined();
  });

  it('should send the payload to the ClipCreator', function() {
    mockCreation();
    var payload = 'new payload';
    scope.payload = payload;

    scope.send();
    scope.$apply();

    expect(ClipCreator.createClip).toHaveBeenCalledWith(payload);
    expect(scope.payload).toBe(null);
  });

  function mockCreation() {
    var mockResult = {};
    deferred.resolve(mockResult);
    spyOn(ClipCreator, 'createClip')
      .andReturn(deferred.promise);
  }
});