'use strict';

angular.module('openclassroomAngularApp')
    .factory('serviceAjax', function serviceAjax($http) {
        return {
            popular: function (page) {
                return $http.get("http://vm:3000/popular?page=" + page);
            }
        }
    });