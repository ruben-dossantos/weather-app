(function () {
    'use strict';

    angular.module('weather')
        .service('WeatherService', WeatherService);

    WeatherService.$inject = ['$http', 'ApiPath', 'ApiKey'];
    function WeatherService($http, ApiPath, ApiKey) {
        var service = this;

        service.getWeather = function(place) {
            var config = {};
            if(place){
                config.params = {
                    'q': place,
                    'APPID': ApiKey
                }
            }
            return $http.get(ApiPath + 'weather', config).then(function(response){
                return response.data;
            });
        };

        service.getForecast = function (place) {
            var config = {};
            if(place){
                config.params = {
                    'q': place,
                    'APPID': ApiKey
                }
            }
            return $http.get(ApiPath + 'forecast/daily', config).then(function(response){
                return response.data;
            });
        }
    }
})();