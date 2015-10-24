'use strict';


PopularCtrl.$inject = [
    '$scope',
    'serviceAjax'
];

function PopularCtrl(scope, serviceAjax) {

    scope.currentPage = 1;
    scope.totalPages = 0;

    var loadMovies = function() {
        scope.loading = true;
        serviceAjax.popular(scope.currentPage).success(function (data) {

            scope.movies = data.results;
            scope.totalPages = data.total_pages;
            scope.loading = false;
        });
    }

    loadMovies();

};

angular.module('openclassroomAngularApp')
    .controller('PopularCtrl', PopularCtrl);