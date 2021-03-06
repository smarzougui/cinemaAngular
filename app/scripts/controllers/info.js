'use strict';


InfoCtrl.$inject = [
    '$scope',
    '$routeParams',
    'serviceAjax'
];

function InfoCtrl(scope, routeParams, serviceAjax) {
    scope.currentPage = 1;

    scope.currentPage = 1;
    scope.totalPages = 0;
    scope.id = routeParams.id;
    scope.loading = true;

    scope.infoMovie = function() {
        serviceAjax.info(scope.id).success(function(data) {
            scope.movie = data;
            scope.loading = false;
        });
    }
    scope.infoMovie();
}

angular.module('openclassroomAngularApp')
    .controller('InfoCtrl', InfoCtrl);
