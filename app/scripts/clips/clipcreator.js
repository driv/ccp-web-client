'use strict';

angular.module('clips')
  .service('ClipCreator', function(ClipResource, Session) {
    this.createClip = function(payload) {
      var userId = Session.getUserData().userId;
      var clipToSave = {
        userId: userId,
        clip: {
          payload: payload
        }
      };
      return ClipResource.save(clipToSave).$promise;
    };
  });