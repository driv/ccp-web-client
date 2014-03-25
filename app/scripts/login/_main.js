'use strict';

angular.module('login', [
  'ngResource',
  'ngCookies',
  'config'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authenticator');
  })
  .run(function($rootScope, $location, Session) {
    $rootScope.$on('$routeChangeStart', function(event, next) {
      if (!next.public && !Session.isLogged()) {
        var nextPath = makeNextPath(next);
        $location.search('nextPath', nextPath);
        $location.path('login');
      }
    });

    function makeNextPath(next) {
      var originalPath = next.$$route && next.$$route.originalPath;
      return originalPath || '';
    }
  });