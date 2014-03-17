'use strict';

angular.module('login')
  .service('PersistentSession', function($cookieStore) {
    var key = 'userData';
    this.store = function(data) {
      $cookieStore.put(key, data);
    };
    this.retrieve = function() {
      return $cookieStore.get(key);
    };
  });