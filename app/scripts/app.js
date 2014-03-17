'use strict';

angular.module('ccpWebClientApp', ['ngRoute', 'users', 'login'])
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