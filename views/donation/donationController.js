'use strict';

angular
  .module('shareBlood')
  .controller('donationController', ['$http', function($http){

    var index = this;

    index.search = function() {

      alert('funciona');
      return;

      $http.get('/api/')
        .success(function(data){})
        .error(function(data){})
        .finally(function(){});

    };

    index.register = function() {
      debugger;

    };

  }]);