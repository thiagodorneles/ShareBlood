'use strict';

angular
  .module('shareBlood')
  .controller('registerController', ['$http', function($http){

    var register = this;

    register.send = function() {
      var params = _.clone(register.user);
      params.role = 'person';

      $http.post('/api/register', params)
        .success(function(data){
          debugger;
        })
        .error(function(data){
          debugger;
        });

    };

  }]);
