'use strict';

describe('Controller: MainCtrl', function () {

    // load the controller's module
    beforeEach(module('openclassroomAngularApp'));

    var MainCtrl,scope, theFilter;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope, myFilterFilter) {
        scope = $rootScope.$new();

        theFilter = myFilterFilter;
        MainCtrl = $controller('MainCtrl', {
            $scope: scope
        });
    }));

    it('should attach a list of awesomeThings to the scope', function () {
        console.log("scope.awesomeThings.length=", scope.awesomeThings);

        expect(scope.awesomeThings.length).toBe(3);
    });

    it('sould contain HTML5 Boilerplate  as second element of the', function () {
        expect(scope.awesomeThings[0]).toBe('HTML5 Boilerplate');
    });


    it ('the filter should work properly', inject (function (myFilterFilter) {
        expect(myFilterFilter('abc')).toBe ('ABC');
        expect(myFilterFilter('c')).toBe ('C');
        expect(myFilterFilter('T')).toBe ('T');
    }))

});
