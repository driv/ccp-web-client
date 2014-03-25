'use strict';

angular.module('ccpWebClientApp', ['ngRoute', 'users', 'login', 'clips'])
  .config(function($routeProvider) {
    $routeProvider
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl',
        public: true,
      })
      .when('/register', {
        templateUrl: 'views/register.html',
        controller: 'RegisterUserCtrl',
        public: true,
      })
      .when('/clips', {
        templateUrl: 'views/clips/clips.html'
      })
      .otherwise({
        redirectTo: '/'
      });
  });