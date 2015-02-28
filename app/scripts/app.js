'use strict';


angular.module('app', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router'
])
  .config(['$stateProvider','$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    //delete $httpProvider.defaults.headers.common['X-Requested-With'];
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('index', {
        url: '/',
        templateUrl: 'views/main.html',
        controller:'MainCtrl'
      })
        // nested view for index
      .state('index.profile', {
        url: '/profile',
        templateUrl: 'views/profile.partial/_profile.html'
      })
      .state('index.profile.section-one', {
        url: '/one',
        templateUrl: 'views/profile.partial/_section-one.html'
      })
      .state('index.profile.section-two', {
        url: '/two',
        templateUrl: 'views/profile.partial/_section-two.html'
      })
      .state('index.account', {
        url: '/account',
        templateUrl: 'views/about.partial/_account.html'
      })
      // nav bar views
      .state('index.details', {
        url: '/details',
        templateUrl: 'views/about.partial/_details.html'
      })
      .state('about', {
        url: '/about',
        templateUrl: 'views/about.html',
        controller:'AboutCtrl'
      })
      .state('contact', {
        url: '/contact',
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl'
      });
  }]);




