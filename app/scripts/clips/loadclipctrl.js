'use strict';

angular.module('clips')
  .controller('LoadClipCtrl', function($scope, ClipLoader) {
    $scope.loadLastClip = function() {
      $scope.clip = ClipLoader.loadLastClip();
    };
  });