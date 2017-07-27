(function(){
    'use strict';

    angular.module('weather')
        .controller('PlaceController', PlaceController);

    PlaceController.$inject = ['placeWeather', 'placeForecast'];
    function PlaceController(placeWeather, placeForecast) {
        var placeCtrl = this;

        var getImageText = function (icon) {
            var stateClass = 'weather-';
            switch(icon){
                case '03d' :
                case '03n' :
                case '04d' :
                case '04n' :
                    return stateClass + 'cloud';
                case '50d' :
                case '50n' :
                    return stateClass + 'mist';
                case '09d' :
                case '09n' :
                    return stateClass + 'rain';
                case '13d' :
                case '13n' :
                    return stateClass + 'snow';
                case '01d' :
                case '01n':
                    return stateClass + 'sun';
                case '02d' :
                case '02n' :
                    return stateClass + 'sun-cloud';
                case '10d' :
                case '10n' :
                    return stateClass + 'sun-rain';
                case '11d' :
                case '11n' :
                    return stateClass + 'thunder-rain';
            }
        };

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
                'state': getImageText(placeWeather.weather[0].icon)
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
                    'state': getImageText(item.weather[0].icon)
                };
                placeCtrl.forecast.push(temp);
            }
        }
    }
})();