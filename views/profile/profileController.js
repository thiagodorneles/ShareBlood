'use strict';

angular
    .module('shareBlood')
    .controller('profileController', ['$http', function($http){

        var profile = this;

        profile.get = function() {

            var user = {};
            user.name = 'Thiago Dorneles';
            user.gender = 'M';
            user.birthdate = '20/07/1988';
            user.history = [
                {
                    date: '01/01/2000',
                    where: 'Hospital Santa Casa',
                    who: 'Mauricio Antunes'
                },
                {
                    date: '01/01/2000',
                    where: 'Hospital Santa Casa',
                    who: 'Mauricio Antunes'
                },
                {
                    date: '01/01/2000',
                    where: 'Hospital Santa Casa',
                    who: 'Mauricio Antunes'
                },
                {
                    date: '01/01/2000',
                    where: 'Hospital Santa Casa',
                    who: 'Mauricio Antunes'
                },
                {
                    date: '01/01/2000',
                    where: 'Hospital Santa Casa',
                    who: 'Mauricio Antunes'
                }
            ];

            if (user.gender === 'M')
                user.gender_description = 'Masculino';
            else
                user.gender_description = 'Feminino';

            profile.user = user;
        };

        profile.get();

    }]);