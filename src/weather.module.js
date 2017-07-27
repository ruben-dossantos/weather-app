(function() {
    'use strict';
    angular.module('weather', ['ui.router', 'angular-loading-bar'])
        .constant('ApiPath', 'http://api.openweathermap.org/data/2.5/')
        .constant('ApiKey', '56bad1ca5198fd8c195319a824fa7ae2')
        .config(config);

    config.$inject = ['$stateProvider', '$urlRouterProvider'];
    function config($stateProvider, $urlRouterProvider) {

        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'src/home/home.html',
                controller: 'HomeController',
                controllerAs: 'homeCtrl'
            })
            .state('home.place', {
                url: 'place/{place}',
                templateUrl: 'src/home/place/place.html',
                controller: 'PlaceController',
                controllerAs: 'placeCtrl',
                resolve: {
                    placeWeather: ['$stateParams', 'WeatherService', function($stateParams, WeatherService){
                        return WeatherService.getWeather($stateParams.place);
                    }],
                    placeForecast: ['$stateParams', 'WeatherService', function($stateParams, WeatherService){
                        return WeatherService.getForecast($stateParams.place);
                    }]
                }
            });

        $urlRouterProvider.otherwise('/');
    }
})();