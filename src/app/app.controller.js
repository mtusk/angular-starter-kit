(function() {
  'use strict';

  angular
    .module('angular-starter-kit')
    .controller('AppController', AppController);

  function AppController($state) {

    var vm = this;

    vm.$state = $state;

    function activate() {
      //
    }

    activate();

  }
})();
