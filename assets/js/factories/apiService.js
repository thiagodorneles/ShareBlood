'use strict';

angular
    .module('shareBlood')
    .factory('API', ['$http', 'userService', function($http, userService){

        var base_url = 'https://nameless-wildwood-7488.herokuapp.com/api/';

        var api = {};

        api.get = function(url, parameters, include_header) {
            var p      = {},
                header = {};

            if (parameters)
                p = parameters;

            // if (include_header) {
                // header = {
                //     'Authorization' : 'Token token=' + userService.get_token()
                // };
            // }

            // return $http.get(base_url + url,
            //     {
            //         params: p,
            //         headers: header
            //     }
            // );

            $http.defaults.headers.common.Authorization = 'Token token=' + userService.get_token();
            return $http.get(base_url + url,
                {
                    params: p,
                }
            );

        };

        api.post = function(url, parameters, include_header) {
            // var header = {};
            // if (include_header) {
                // console.log(include_header);
                // header = {
                //     'Authorization' : 'Token token=' + userService.get_token()
                // };
                $http.defaults.headers.common.Authorization = 'Token token=' + userService.get_token();
            // }
            return $http.post(base_url + url, parameters);
        };

        api.put = function(url, parameters, include_header) {
            // if (include_header) {
                $http.defaults.headers.common.Authorization = 'Token token=' + userService.get_token();
            // }
            return $http.put(base_url + url, parameters);
        };

        return api;
    }]);