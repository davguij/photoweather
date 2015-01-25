'use strict';

angular.module('Photoweather').
service('weatherServices', function($http) {
    this.weatherCall = function(lat, lon) {
        // using forecast.io API
        var baseUrl = "https://api.forecast.io/forecast/";
        var apiKey = "ea571f3d09f0af74341638f74bf390d6";
        var latLon = "/" + lat + "," + lon;
        var callback = "?callback=JSON_CALLBACK";
        return ($http.jsonp(baseUrl + apiKey + latLon + callback).then(function(response) {
            return(response.data);
        }, function(error) {
            console.log("error");
        }));
    }
});