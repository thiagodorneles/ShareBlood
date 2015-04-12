'use strict';

angular
  .module('shareBlood')
  .controller('donationController', ['API', '$scope', 'userService', function(API, $scope, userService){

    var donation = this;

    API.get('blood_banks').success(function(data){
      $scope.bloodbanks = data.blood_banks;
    });

    donation.search = function() {
      API.get('/api/', {'search' : donation.search_field})
        .success(function(data){})
        .error(function(data){});

    };

    donation.list = function() {
      API.get('donations')
        .success(function(data){
          donation.donations = data.donations;
          angular.forEach(donation.donations, function(el){
            el.percent = (el.donated * 100) / el.needed;
          });
        });
    };

    donation.donate = function(item) {

      var data = {};
      data.blood_bank_id = item.blood_bank.id;
      data.user_id = userService.get_user().id;

      API.post('donate_histories/', data)
        .success(function(data){
          item.donated++;
          item.confirmed_donated = true;
          item.percent = (item.donated * 100) / item.needed;
        });

    };

    donation.send = function() {

      var data = {};
      data.donation = _.clone(donation.register);
      data.donation.blood_bank_id = 1;
      data.donation.user_id = userService.get_user().id;

      if (data.donation.start_date) {
        var dates = data.donation.start_date.split('/');
        var dt = new Date(parseInt(dates[2]), parseInt(dates[1])-1, parseInt(dates[0]));
        data.donation.start_date = dt.toISOString().substr(0, 10);
      }
      if (data.donation.end_date) {
        var dates = data.donation.end_date.split('/');
        var dt = new Date(parseInt(dates[2]), parseInt(dates[1])-1, parseInt(dates[0]));
        data.donation.end_date = dt.toISOString().substr(0, 10);
      }

      API.post('donations', data)
        .success(function(data){
          donation.list();
          $('#modalCampaign').closeModal();
        })
        .error(function(data){
          // debugger;
        });

    };

    donation.list();

  }]);