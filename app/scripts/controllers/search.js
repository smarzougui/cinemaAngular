'use strict';

SearchCtrl.$inject = ['$scope', '$location', '$routeParams', 'serviceAjax'];


function SearchCtrl(scope, location, routeParams, serviceAjax) {

    scope.currentPage = 1;
    scope.totalPages = 0;
    scope.query = routeParams.query;

    scope.loadMovies = function() {
        serviceAjax.search(scope.currentPage, scope.query).success(function(data) {
            scope.movies = data.results;
            scope.totalPages = data.total_pages;
        });
    };

    scope.loadMovies();
    scope.pageChanged = function() {
        scope.loadMovies();
    }

};

angular.module('openclassroomAngularApp')
    .controller('SearchCtrl', SearchCtrl);
