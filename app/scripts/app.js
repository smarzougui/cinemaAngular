'use strict';

var app = angular.module('openclassroomAngularApp', [
    'ngRoute',
    'ui.bootstrap'
]);


app.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/main.html',
            controller: 'MainCtrl',
            reloadOnSearch: false
        })
        .when('/samples', {
            templateUrl: 'views/samples.html',
            controller: 'SamplesCtrl',
            reloadOnSearch: false
        })
        .when('/popular', {
            templateUrl: 'views/movies.html',
            controller: 'PopularCtrl',
            reloadOnSearch: false
        })
        .when('/search/:query', {
            templateUrl: 'views/movies.html',
            controller: 'SearchCtrl',
            reloadOnSearch: false
        })
        .when('/samples', {
            templateUrl: 'views/samples.html',
            controller: 'SamplesCtrl',
            reloadOnSearch: false
        })
        .when('/info/:id', {
          templateUrl: 'views/info.html',
          controller: 'InfoCtrl'
        })
        .otherwise({
            redirectTo: '/'
        })
    ;

    //$locationProvider.html5Mode(true);

});
