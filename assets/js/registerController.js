'use strict';

angular
  .module('shareBlood')
  .controller('registerController', ['API', 'userService', 'locationService', function(API, userService, locationService){

    var register = this;

    register.send = function() {
      var params = {};
      params.user = _.clone(register.user);

      if (params.user.profile.birthdate) {
        var dates = params.user.profile.birthdate.split('/');
        var dt = new Date(parseInt(dates[2]), parseInt(dates[1])-1, parseInt(dates[0]));
        params.user.profile.birthdate = dt.toISOString().substr(0, 10);
      }

      var userLocation = locationService.restore_location();
      if (userLocation) {
        params.user.address = {
          latitude  : userLocation.lat.toString(),
          longitude : userLocation.lng.toString()
        };
      }

      API.post('users', params, true)
        .success(function(data){
          userService.login(data);
          $('#modalRegister').closeModal();
        })
        .error(function(data){
        });

    };

  }]);
