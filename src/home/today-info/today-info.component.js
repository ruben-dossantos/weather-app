(function () {
    'use strict';

    angular.module('weather')
        .component('todayInfo', {
            templateUrl: 'src/home/today-info/today-info.html',
            bindings: {
                weather: '<'
            }
        })
})();