(function() {
  'use strict';

  angular
    .module('angular-starter-kit')
    .config(RouteConfig);

  function RouteConfig($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');

    $stateProvider
      .state('app', {
        abstract: true,
        url: '/',
        templateUrl: 'app/app.html',
        controller: 'AppController',
        controllerAs: 'vm'
      })
      .state('app.home', {
        url: 'home',
        templateUrl: 'app/home/home.html',
        controller: 'HomeController',
        controllerAs: 'vm'
      })
      .state('app.about', {
        url: 'about',
        templateUrl: 'app/about/about.html',
        controller: 'AboutController',
        controllerAs: 'vm'
      });
  }
})();
