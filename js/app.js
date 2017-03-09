"use strict";

(function(){
  angular
    .module("wdinstagram", [
      "ui.router",
      "ngResource"
    ])
    .config([
      "$stateProvider",
      RouterFunc
    ])

  function RouterFunc($stateProvider) {
    $stateProvider
      .state("entriesIndex", {
        url: "/entries",
        templateUrl: "js/entries/index.html",
        controller: "EntriesIndexCtrl",
        controllerAs: "indexVm"
      })
    
  }

})();
