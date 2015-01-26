'use strict';

angular.module('Photoweather').
service('weatherServices', function($http) {
    this.weatherCall = function(lat, lon) {
        // using forecast.io API
        var baseUrl = "https://api.forecast.io/forecast/";
        var apiKey = "ea571f3d09f0af74341638f74bf390d6";
        var latLon = "/" + lat + "," + lon;
        var options = "?units=si";
        var callback = "&callback=JSON_CALLBACK";
        return ($http.jsonp(baseUrl + apiKey + latLon + options + callback).then(function(response) {
            return (response.data);
        }, function(error) {
            console.log("error");
        }));
    }
});

angular.module('Photoweather').
service('auxServices', function() {
    this.roundTo5th = function(num) {
        return Math.round(num / 5) * 5;
    }
    this.roundToHalf = function(num) {
        return Math.round(num / 0.5) * 0.5;
    }
})
