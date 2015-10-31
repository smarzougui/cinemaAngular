'use strict';

angular.module('openclassroomAngularApp')
    .directive('loading', function() {
        return {
            scope: {
                loadingDirective: '=loadingState'
            },
            template: '<div><div ng-show="loadingDirective" class="loading-container"></div><div ng-hide="loadingDirective" ng-transclude></div></div>',
            restrict: 'AE',
            replace: true,
            transclude: true,
            compile: function compile(element, attrs, transclude) {
                var spinner = new Spinner().spin();
                var loadingContainer = element.find(".loading-container")[0];
                loadingContainer.appendChild(spinner.el);

            }
        };
    });
