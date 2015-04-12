'use strict';

angular
    .module('shareBlood')
    .factory('userService', ['$cookieStore', '$http', '$rootScope', function($cookieStore, $http, $rootScope){

        var cookie_name = 'hackinpoa_user';

        var user = {};

        user.logged = function() {
            return $rootScope.logged;
        };

        user.get_token = function() {
            if (user.get_user()) {
                return user.get_user().token;
            }
            return false;
        };

        user.get_user = function() {
            return $cookieStore.get(cookie_name);
        };

        user.login = function(data, already) {

            var user = {};

            if (!already) {
                user.name            = data.user.profile.name;
                user.token           = data.user.token;
                user.id              = data.user.id;
            }
            else {
                user = data;
            }
            $rootScope.logged    = true;
            $rootScope.user_name = user.name;

            $cookieStore.put(cookie_name, user);
            // $httpProvider.defaults.headers.common.Authorization = 'Token token=' + user.token.get_token();
        };

        user.logout = function() {
            $rootScope.logged = false;
            clearCookie();
            // $httpProvider.defaults.headers.common.Authorization = 'Token token=1';
        };

        function clearCookie() {
            $cookieStore.remove(cookie_name);
        }

        return user;

    }]);