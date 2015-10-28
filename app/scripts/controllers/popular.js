'use strict';


PopularCtrl.$inject = [
    '$scope',
    'serviceAjax'
];

function PopularCtrl(scope, serviceAjax) {

    scope.currentPage = 1;
    scope.totalPages = 0;

    scope.loadMovies = function() {
        scope.loading = true;
        serviceAjax.popular(scope.currentPage).success(function (data) {

            scope.movies = data.results;
            scope.totalPages = data.total_pages;
            scope.loading = false;
        });
    }

    scope.pageChanged = function(){
        scope.loadMovies();
    };

    scope.loadMovies();

    scope.password = '';
    scope.grade = function() {
        var size = scope.password.length;
        if (size > 8) {
            scope.strength = 'strong';
        } else if (size > 3) {
            scope.strength = 'medium';
        } else {
            scope.strength = 'weak';
        }
    };

};

angular.module('openclassroomAngularApp')
    .controller('PopularCtrl', PopularCtrl);