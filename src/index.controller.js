(function() {
  'use strict';

  angular
    .module('angular-starter-kit')
    .controller('IndexController', IndexController);

  function IndexController() {

    var vm = this;

    vm.message = null;

    function activate() {
      vm.message = 'Hello world';
    }

    activate();

  }
})();
