'use strict';

describe('Service: ClipLoader', function() {

  // load the service's module
  beforeEach(module('clips'));

  var ClipLoader,
    ClipResource,
    Session;
  // instantiate service
  beforeEach(inject(function(_ClipLoader_, _ClipResource_, _Session_) {
    ClipLoader = _ClipLoader_;
    ClipResource = _ClipResource_;
    Session = _Session_;
  }));

  beforeEach(function() {
    var userData = {
      userId: 12
    };
    Session.login(userData);
  });


  it('should be injected', function() {
    expect( !! ClipLoader).toBe(true);
  });

  it('should expose a function to get a clip', function() {
    expect(ClipLoader.loadClip).toBeDefined();
  });

  it('should call the clip resource with the clip id and user id', function() {
    spyOn(ClipResource, 'get');

    ClipLoader.loadClip(1);

    expect(ClipResource.get).toHaveBeenCalledWith({
      id: 1,
      userId: 12
    });
  });

  it('should expose a function to get the last clip', function() {
    expect(ClipLoader.loadLastClip).toBeDefined();
  });

  it('should call the clip resource to get the last clip', function() {
    spyOn(ClipResource, 'get');

    ClipLoader.loadLastClip();

    expect(ClipResource.get).toHaveBeenCalledWith({
      id: 'last',
      userId: 12
    });
  });

});