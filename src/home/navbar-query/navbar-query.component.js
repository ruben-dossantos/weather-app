(function () {
    'use strict';

    angular.module('weather')
        .component('navbarQuery', {
            templateUrl: 'src/home/navbar-query/navbar-query.html',
            controller: NavbarQueryController
        });

    NavbarQueryController.$inject = ['$state'];
    function NavbarQueryController($state) {
        var $ctrl = this;

        $ctrl.submit = function() {
            $state.transitionTo('home.place', {place: $ctrl.place});
        };
    }
})();