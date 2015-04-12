'use strict';

angular
    .module('shareBlood')
    .controller('detailController', ['API', '$routeParams', function(API, $routeParams){

        var detail = this;

        detail.get = function(id) {
            API.get('donations/' + id)
                .success(function(data) {
                  detail.donation = data.donation;
                });
        };

        detail.get($routeParams.id);

}]);