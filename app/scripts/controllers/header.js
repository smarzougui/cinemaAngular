'use strict';

HeaderCtrl.$inject = ['$scope','$location'];

function HeaderCtrl(scope, location) {

    scope.query ="";
    scope.searchAction = function () {
        location.path('/search/' + scope.query);
    };
}

angular.module('openclassroomAngularApp')
    .controller('HeaderCtrl', HeaderCtrl);
