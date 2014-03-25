'use strict';

describe('Service: ClipCreator', function() {

  // load the service's module
  beforeEach(module('clips'));

  // instantiate service
  var ClipCreator,
    Session,
    ClipResource;
  var resourcePromise;
  beforeEach(inject(function($q, _ClipCreator_, _Session_, _ClipResource_) {
    ClipCreator = _ClipCreator_;
    Session = _Session_;
    ClipResource = _ClipResource_;
    resourcePromise = $q.defer();
  }));

  beforeEach(function() {
    spyOn(Session, 'getUserData').andReturn({
      userId: '1'
    });
  });

  beforeEach(function() {
    spyOn(ClipResource, 'save').andReturn({
      $promise: resourcePromise.promise
    });
  });

  it('should be injected', function() {
    expect( !! ClipCreator).toBe(true);
  });

  it('should make the clip and pass it to the clipResource', function() {
    ClipCreator.createClip('testing clip creation');

    var clip = {
      clip: {
        payload: 'testing clip creation'
      },
      userId: '1'
    };
    expect(ClipResource.save).toHaveBeenCalledWith(clip);
  });

  it('should return a promise', function() {
    var creationPromise = ClipCreator.createClip('another clip');

    expect(creationPromise.then).toBeDefined();
  });

});