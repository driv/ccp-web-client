'use strict';

angular.module('ccpWebClientApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'config'
])
  .config(function($routeProvider) {
    $routeProvider
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl',
      })
      .when('/register', {
        templateUrl: 'views/register.html',
        controller: 'RegisterUserCtrl',
      })
      .otherwise({
        redirectTo: '/'
      });
  });