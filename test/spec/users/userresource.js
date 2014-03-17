'use strict';

describe('Service: UserResource', function() {

  // load the service's module
  beforeEach(module('users'));

  // instantiate service
  var UserResource;
  beforeEach(inject(function(_UserResource_) {
    UserResource = _UserResource_;
  }));

  it('should be injected', function() {
    expect( !! UserResource).toBe(true);
  });

});