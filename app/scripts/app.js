'use strict';
// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('Photoweather', ['ionic', 'config'])

.constant("tempObject", {
    "-20": "#CD02FA",
    "-10": "#AB06C4",
    "0": "#0400F7",
    "10": "#057BFA",
    "20": "#0AB7C7",
    "30": "#08E4FC",
    "40": "#81FF0A",
    "50": "#D6FA07",
    "60": "#C9860A",
    "70": "#FC9905",
    "80": "#C90A00",
    "90": "#AD0502",
    "100": "#A10402",
    "110": "#B83633"
})

.run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if (window.StatusBar) {
            // org.apache.cordova.statusbar required
            StatusBar.styleDefault();
        }

    });
});
