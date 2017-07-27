(function () {
    'use strict';

    angular.module('weather')
        .filter('convertTemperature', function(){
            return function (input, target, precision){
                var converted;
                if(target == 'C'){
                    converted = input - 273.15;
                } else if (target == 'F') {
                    converted = input * 1.8 - 459.67;
                } else {
                    converted = input;
                }

                if(precision) {
                    converted = Math.round(converted);
                } else {
                    converted = Math.round(converted * 100) / 100;
                }

                return converted;
            }
        })
})();