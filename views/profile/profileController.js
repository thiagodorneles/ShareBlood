'use strict';

angular
    .module('shareBlood')
    .controller('profileController', ['API', 'userService', function(API, userService){

        var profile = this;

        profile.get = function() {
            var user_id = userService.get_user().id;

            API.get('users/' + user_id, null)
                .success(function(data) {

                    var user = data.user;

                    if (user.profile.gender === 'M')
                        user.profile.gender_description = 'Masculino';
                    else
                        user.profile.gender_description = 'Feminino';

                    var aux = user.profile.birthdate.split('-');
                    user.profile.birthdate = aux[2] + '/' + aux[1] + '/' + aux[0];

                    profile.user = user;
                });
        };

        profile.update = function() {
            if (profile.user.profile.birthdate) {
                var dates = profile.user.profile.birthdate.split('/');
                var dt = new Date(parseInt(dates[2]), parseInt(dates[1])-1, parseInt(dates[0]));
                profile.user.profile.birthdate = dt.toISOString().substr(0, 10);
            }       
            API.put('users/' + profile.user.id, profile.user)
                .success(function(data){
                    debugger;
                })
                .error(function(data) {
                    debugger;
                });

        };

        profile.get();

    }]);