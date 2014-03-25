'use strict';

describe('Service: ClipResource', function() {

  // load the service's module
  beforeEach(module('clips'));

  // instantiate service
  var ClipResource;
  beforeEach(inject(function(_ClipResource_) {
    ClipResource = _ClipResource_;
  }));

  it('should be injected', function() {
    expect( !! ClipResource).toBe(true);
  });

});