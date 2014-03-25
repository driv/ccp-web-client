'use strict';

angular.module('clips')
  .controller('CreateClipCtrl', function($scope, ClipCreator) {
    $scope.send = function() {
      ClipCreator.createClip($scope.payload)
        .then(reset());
    };

    function reset() {
      $scope.payload = null;
    }
  });