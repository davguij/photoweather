'use strict';

angular.module('Photoweather').
controller('WeatherController', function($scope, $ionicPlatform, weatherServices) {
    $ionicPlatform.ready(function() {
        navigator.geolocation.getCurrentPosition(function(position) {
            $scope.$apply(function() {
                $scope.position = position.coords;
            });
            weatherServices.weatherCall(position.coords.latitude, position.coords.longitude).then(function(response) {
                $scope.forecast = response;
            })
        }, function(error) {
            console.log(error);
        });
    });
});
