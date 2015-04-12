'use strict';

angular
    .module('shareBlood')
    .factory('locationService', ['$rootScope', function($rootScope){

        var location = this;

        location.get_current_location = function() {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(location.set_position);
            }
        };

        location.restore_location = function() {
            if ($rootScope.position)
                return $rootScope.position;
            return null;
        };

        location.set_position = function (position) {
            $rootScope.position = {};
            $rootScope.position.lat = position.coords.latitude;
            $rootScope.position.lng = position.coords.longitude;
            $rootScope.position.accuracy = position.coords.accuracy;
        };


        return location;
    }]);