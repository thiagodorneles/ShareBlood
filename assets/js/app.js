var app = angular.module('shareBlood', ['ngRoute', 'ngCookies', 'ngMask']);

app.run(['userService', function(userService){
  if (userService.get_user()) {
    userService.login(userService.get_user(), true);
  }
}]);

app.config(['$routeProvider', '$locationProvider',
  function($routeProvider, $locationProvider) {
    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });
    $routeProvider.
      when('/faq', {
        templateUrl: '/views/faq/faq.html',
        controller: 'faqController'
      })
      .when('/meus-dados', {
        templateUrl: '/views/profile/profile.html',
        controller: 'profileController'
      })
      .when('/', {
        templateUrl: '/views/donation/donation.html',
        controller: 'donationController',
        controllerAs: 'donation'
      })
      .when('/detalhes/:id', {
        templateUrl: '/views/donation/detail.html',
        controller: 'detailController'
      })
      .otherwise({ redirectTo: '/' });
  }]);