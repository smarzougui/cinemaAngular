'use strict';

var app = angular.module('openclassroomAngularApp', [
    'ngRoute',
    'ui.bootstrap'
]);


app.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/main.html',
            controller: 'MainCtrl'
        })
        .when('/popular', {
            templateUrl: 'views/popular.html',
            controller: 'PopularCtrl'
        })
        .otherwise({
            redirectTo: '/'
        });

    //$locationProvider.html5Mode(true);

});
