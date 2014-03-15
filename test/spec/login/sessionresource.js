'use strict';

describe('Service: SessionResource', function() {

  // load the service's module
  beforeEach(module('ccpWebClientApp'));

  // instantiate service
  var SessionResource;
  beforeEach(inject(function(_SessionResource_) {
    SessionResource = _SessionResource_;
  }));

  it('should be injected', function() {
    expect( !! SessionResource).toBe(true);
  });

});