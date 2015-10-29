'use strict';

angular.module('openclassroomAngularApp')
    .factory('serviceAjax', function serviceAjax($http) {
        return {
            popular: function(page) {
                return $http.get("http://vm:3000/popular?page=" + page);
            },
            search: function(page, query) {
                return $http.get("http://vm:3000/search?q=" + query + "&page=" + page);
            },
            info: function(id) {
                return $http.get("http://vm:3000/info/" + id);
            }
        }
    });