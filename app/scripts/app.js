'use strict';

var app = angular.module('openclassroomAngularApp', []);

app.controller("headerCtrl", function ($scope) {
    $scope.products = [
        {'name': "Product 1", 'quantity': 1, 'price': 40},
        {'name': "Product 2", 'quantity': 1, 'price': 50}
    ];

    $scope.discount = 0;
    $scope.totalNet = function() {
        return $scope.total() - $scope.discount;
    }



    $scope.total = function () {

        var temp = 0;
        $scope.products.forEach(function(el) {
            temp += el.quantity * el.price
        });
        return temp;
    }

    $scope.$watch($scope.total, _calculateDiscount);

    function _calculateDiscount(newValue, oldValue, scope){

        console.log ('here');
        $scope.discount = (newValue > 100) ? newValue * 0.10 : 0;
    };


});

app.controller("footerCtrl", function ($scope) {


});

app.controller("contentCtrl", function ($scope) {
    $scope.name = "";
    $scope.showContent = true;

    $scope.myBindingFunction = function () {
        return ($scope.name.length >= 5) ? "Beaucoup" : "Petit";
    }
});


app.controller("menuCtrl", function ($scope) {

    $scope.sywiseExpanders = [
        {title: 'Click me to expand',
            text: 'Hi there folks, I am the content that was hidden but is now shown.'},
        {title: 'Click this',
            text: 'I am even better text than you have seen previously'},
        {title: 'No, click me!',
            text: 'I am text that should be seen before seeing other texts'}
    ];

});

var sywiseAccordionDirective = function() {
    return {
        restrict: 'EA',
        replace: true,
        transclude: true,
        template: '<div ng-transclude> </div>',
        controller: function () {
            var sywiseExpanders = [];

            this.addExpander = function (exp) {
                sywiseExpanders.push(exp);
            };

            //Close all the other expenders, based on the passed one.
            this.gotOpenedExpender = function (currentOpened) {
                angular.forEach(sywiseExpanders, function (el) {
                    if (currentOpened != el) {
                        el.showMe = false;
                    }
                });
            }
        }
    }
}

app.directive('sywiseAccordion', sywiseAccordionDirective);




var sywiseExpanderDirective = function () {

    return {
        restrict: 'EA',
        replace: true,
        transclude: true,
        require: '^?sywiseAccordion',
        scope: {title: '@sywiseExpanderTitle'},
        template: '<di>' +
        '<div class="title" ng-click="toggle()">{{title}}</div>' +
        '<div class="body" ng-show="showMe" ng-transclude></div>' +
        '</div>',
        link: function (scope, element, attrs, sywiseAccordionController, aa, bb) {
            sywiseAccordionController.addExpander(scope);

            scope.toggle = function () {
                scope.showMe = !scope.showMe;
                sywiseAccordionController.gotOpenedExpender(scope);
            }
        }
}

}

app.directive('sywiseExpander', sywiseExpanderDirective);

