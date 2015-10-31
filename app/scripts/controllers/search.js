'use strict';

SearchCtrl.$inject = ['$scope', '$location', '$routeParams', 'serviceAjax'];


function SearchCtrl(scope, location, routeParams, serviceAjax) {

    scope.currentPage = 1;
    scope.totalPages = 0;
    scope.query = routeParams.query;
    scope.loading = true;
    scope.reverse = false;
    scope.predicate = "title";

    scope.loadMovies = function() {
        scope.loading = true;
        serviceAjax.search(scope.currentPage, scope.query).success(function(data) {
            scope.movies = data.results;
            scope.totalPages = data.total_pages;
            scope.loading = false;
        });
    };

    scope.clickPredicateName = function() {
        scope.predicate = 'title';
        scope.reverse = !scope.reverse;
    };

    scope.clickPredicateRate = function() {
        scope.predicate = 'vote_average';
        scope.reverse = !scope.reverse;
    };

    scope.loadMovies();
    scope.pageChanged = function() {
        scope.loadMovies();
    }

};

angular.module('openclassroomAngularApp')
    .controller('SearchCtrl', SearchCtrl);
