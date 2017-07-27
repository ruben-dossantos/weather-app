(function(){
    'use strict';

    angular.module('weather')
        .component('headerInfo', {
            templateUrl: 'src/home/header-info/header-info.html',
            bindings: {
                city: '<'
            }
        });
})();