(function(){
    'use strict';

    angular.module('weather')
        .controller('PlaceController', PlaceController);

    PlaceController.$inject = ['placeWeather', 'placeForecast'];
    function PlaceController(placeWeather, placeForecast) {
        var placeCtrl = this;

        if (placeWeather) {
            placeCtrl.cityInfo = {
                'name': placeWeather.name,
                'country': placeWeather.sys.country,
                'description': placeWeather.weather[0].description
            };

            placeCtrl.weatherToday = {
                'date': placeWeather.dt * 1000,
                'min': placeForecast.list[0].temp.min,
                'temp': placeWeather.main.temp,
                'max': placeForecast.list[0].temp.max,
                'humidity': placeWeather.main.humidity,
                'state': placeWeather.weather[0].main
            };
            placeCtrl.weatherToday.wind = (placeWeather.wind) ? placeWeather.wind.speed : 0;
            placeCtrl.weatherToday.rain = (placeWeather.rain) ? placeWeather.rain['3h'] : 0;
        }

        if(placeForecast){
            placeCtrl.forecast = [];
            var i;
            for(i = 1; i < placeForecast.list.length; i++){
                var item = placeForecast.list[i];
                var temp = {
                    'date': item.dt * 1000,
                    'min': item.temp.min,
                    'max': item.temp.max,
                    'state': item.weather[0].main
                };
                placeCtrl.forecast.push(temp);
            }
        }
    }
})();