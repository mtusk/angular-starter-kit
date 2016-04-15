(function() {
  'use strict';

  angular
    .module('angular-starter-kit', [
      'ngMaterial'
    ])
    .config(config);

  function config($mdThemingProvider) {
    $mdThemingProvider
      .theme('default')
      .primaryPalette('blue')
      .accentPalette('red')
      .backgroundPalette('green');
  }
})();
