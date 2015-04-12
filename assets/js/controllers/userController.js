'use strict';

angular
    .module('shareBlood')
    .controller('userController', ['$http', 'userService', 'API', '$window', 'locationService',
        function($http, userService, API, $window, locationService){

            var user = this;

            user.logout = function() {
                userService.logout();
            };

            user.login = function() {
                user.erro = false;

                var data = {};
                data.authentication = {
                    email    : user.email,
                    password : user.password
                };

                API.post('authentication', data, false)
                    .success(function(data) {
                        userService.login(data);
                        $('#modalLogin').closeModal();
                    })
                    .error(function(data){
                        user.erro = true;
                    });
            };

            locationService.get_current_location();
        }
    ]);