'use strict';

angular.module('openclassroomAngularApp')
    .directive('loading', function() {
        return {
            scope: {
                loadingDirective: '=loadingState'
            },
            template: '<div ng-show="loadingDirective" class="loadingContainer"> LOADING ... </div>',
            restrict: 'AE',
            replace: true,
            link: function(scope, elem, attrs) {
                //console.log("fromlink=", scope.loadingDirective);
            },
            compile: function compile(element, attrs, transclude) {
                //var spinner = new spin();

            }
        };
    });
