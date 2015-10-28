'use strict';

describe('Controller: InfoCtrl', function() {

    // load the controller's module
    beforeEach(module('openclassroomAngularApp'));

    var InfoCtrl,scope, serviceAjax, httpBackend;

    // Initialize the controller and a mock scope
    beforeEach(inject(function($controller, $rootScope, _serviceAjax_, _$httpBackend_) {
        scope = $rootScope.$new();
        serviceAjax = _serviceAjax_;
        httpBackend = _$httpBackend_;
        InfoCtrl = $controller('InfoCtrl', {
            $scope: scope,
            serviceAjax: _serviceAjax_
        });
    }));

    it('should set $scope.movie when the function infoMovie is called', function() {

        spyOn(serviceAjax, 'info').and.callFake(function() {
            return {
                success: function(callback) {
                    callback({"title": "test"})
                }
            }
        });

        scope.infoMovie();
        expect(scope.movie).toEqual({"title": "test"});

    });

    //TODO: make the test case for detecting the corrected called url
/*
    it('should make a request to the right URL when calling info function', function () {
        serviceAjax.info(1);
        //httpBackend.expectGET('http://vm:3000/info/1').respond({});
        httpBackend.flush();
    });
*/

});
