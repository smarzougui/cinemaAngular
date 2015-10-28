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
            templateUrl: 'views/movies.html',
            controller: 'PopularCtrl'
        })
        .when('/search/:query', {
            templateUrl: 'views/movies.html',
            controller: 'SearchCtrl'
        })
        .when('/info/:id', {
          templateUrl: 'views/info.html',
          controller: 'InfoCtrl'
        })
        .otherwise({
            redirectTo: '/'
        });

    //$locationProvider.html5Mode(true);

});
