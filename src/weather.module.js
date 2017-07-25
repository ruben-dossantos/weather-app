(function() {
    'use strict';
    angular.module('weather', ['ui.router'])
        .config(config);

    config.$inject = ['$urlRouterProvider'];
    function config($urlRouterProvider) {

        $urlRouterProvider.otherwise('/');
    }
})();