'use strict';

angular.module('Photoweather').
directive('currently', function(auxServices, tempObject) {
    return {
        restrict: 'A',
        link: function(scope, element) {
            element[0].width = window.innerWidth;
            element[0].height = window.innerHeight;
            var ctx = element[0].getContext('2d');

            scope.$watch("forecast", function(newVal, oldVal) {
                if (newVal) {
                    // Color temperature full screen box
                    ctx.fillStyle = tempObject[auxServices.roundTo10th(scope.forecast.currently.temperature)];
                    ctx.fillRect(0, 0, element[0].clientWidth, element[0].clientHeight);

                    // "Currently"
                    ctx.font = "24px league-gothic";
                    ctx.fillStyle = "rgba(255,255,255,0.5)";
                    ctx.fillText("CURRENTLY", 25, element[0].clientHeight - 115);

                    // Numerical temperature
                    ctx.font = "100 72px lato";
                    ctx.fillStyle = "rgba(255,255,255,1)"
                    ctx.fillText(auxServices.roundToHalf(scope.forecast.currently.temperature) + "º", 25, element[0].clientHeight - 50);
                }
            });
        }
    }
});

angular.module('Photoweather').
directive('currentlyIcon', function() {
    return {
        restrict: 'A',
        link: function(scope, element) {
            scope.$watch("forecast", function(newVal, oldVal) {
                if (newVal) {
                    var skycons = new Skycons({
                        "color": "rgba(255,255,255,1)",
                        "resizeClear": true
                    });
                    skycons.add(element[0], scope.forecast.currently.icon);
                    skycons.play();
                }
            });
        }
    }
});

angular.module('Photoweather').
directive('hourly', function(auxServices, tempObject) {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            element[0].width = window.innerWidth;
            element[0].height = window.innerHeight;
            var ctx = element[0].getContext('2d');

            scope.$watch("forecast", function(newVal, oldVal) {
                if (newVal) {
                    // Future color temperature full screen gradient box

                    for (var i = attrs.hours - 1; i >= 0; i--) {
                        ctx.fillStyle = tempObject[auxServices.roundTo10th(scope.forecast.hourly.data[i].temperature)];
                        console.log(scope.forecast.hourly.data[i].temperature);
                        console.log(auxServices.roundTo10th(scope.forecast.hourly.data[i].temperature));
                        console.log(ctx.fillStyle);
                        // rayas verticales
                        // ctx.fillRect((element[0].clientWidth / attrs.hours) * i, 0, element[0].clientWidth / attrs.hours, element[0].clientHeight);
                        // rayas horizontales
                        ctx.fillRect(0, ((element[0].clientHeight / attrs.hours) * i), element[0].clientWidth, element[0].clientHeight / attrs.hours);
                    };

                    // "Currently"
                    ctx.font = "24px league-gothic";
                    ctx.fillStyle = "rgba(255,255,255,0.5)";
                    ctx.fillText("NEXT " + attrs.hours + " HOURS", 25, element[0].clientHeight - 115);

                    // Numerical temperature
                    // ctx.font = "100 72px lato";
                    // ctx.fillStyle = "rgba(255,255,255,1)"
                    // ctx.fillText(auxServices.roundToHalf(scope.forecast.currently.temperature) + "º", 25, element[0].clientHeight - 50);
                }
            });
        }
    }
});
