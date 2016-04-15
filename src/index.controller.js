(function() {
  'use strict';

  angular
    .module('angular-starter-kit')
    .controller('IndexController', IndexController);

  function IndexController() {

    var vm = this;

    vm.title = null;
    vm.content = null;

    function activate() {
      vm.title = 'Hello world';
    }

    activate();

  }
})();
