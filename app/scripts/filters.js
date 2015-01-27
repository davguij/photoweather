'use strict';

angular.module('Photoweather').
filter('roundedTo10th', function(auxServices) {
    return function(input, scope) {
        if (input != null) {
            return auxServices.roundTo10th(input);
        }
    }
});
