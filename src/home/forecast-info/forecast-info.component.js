(function () {
    'use strict';

    angular.module('weather')
        .component('forecastInfo', {
            templateUrl: 'src/home/forecast-info/forecast-info.html',
            bindings: {
                weather: '<'
            }
        })
})();