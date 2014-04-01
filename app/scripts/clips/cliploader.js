'use strict';

angular.module('clips')
  .service('ClipLoader', function(ClipResource, Session) {
    this.loadClip = function(id) {
      function makeClipId(id) {

        function getUserId() {
          return Session.getUserData().userId;
        }

        return {
          id: id,
          userId: getUserId()
        };
      }

      return ClipResource.get(makeClipId(id));
    };

    this.loadLastClip = function() {
      return this.loadClip('last');
    };
  });